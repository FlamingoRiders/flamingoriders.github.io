import { useCallback, useMemo } from "react";
import { Activity, Summary, MonthStats, AllStats } from "models/stats";

// The number of milliseconds in one day
const MS_IN_ONE_DAY = 1000 * 3600 * 24;

export const useStats = (activities: Array<Activity>) => {
  const calculateTotal = useCallback((elements: Array<number>) => {
    const total = elements.reduce((sum, element) => {
      return sum + element;
    }, 0);

    return +total.toFixed(2);
  }, []);

  const calculateMean = useCallback(
    (elements: Array<number>) => {
      const mean = calculateTotal(elements) / elements.length;
      return +mean.toFixed(2);
    },
    [calculateTotal],
  );

  const toDecimalTime = useCallback((time: string): number => {
    const [hours, minutes] = time.split(":");
    return +hours + +minutes / 60;
  }, []);

  const toStringTime = useCallback((time: number): string => {
    // Separate whole hours and decimal part
    const hours = Math.floor(time);
    const decimalPart = time - hours;

    // Convert decimal part to minutes
    const minutes = Math.round(decimalPart * 60);

    const hoursLabel = hours > 1 ? "heures" : "heure";
    const minutesLabel = minutes > 1 ? "minutes" : "minute";

    if (hours < 1) {
      return `${minutes} ${minutesLabel}`;
    }

    return `${hours} ${hoursLabel} et ${minutes} ${minutesLabel}`;
  }, []);

  const calculateDaysInBetweenDates = useCallback(
    (dateString1: string, dateString2: string) => {
      const date1 = new Date(dateString1);
      const date2 = new Date(dateString2);
      const timeDifference = Math.abs(date2.getTime() - date1.getTime());
      return Math.round(timeDifference / MS_IN_ONE_DAY) + 1;
    },
    [],
  );

  const calculatePercentageRatio = useCallback(
    (metric: number, totalAccountable: number) => {
      return +((metric / totalAccountable) * 100).toFixed(2);
    },
    [],
  );

  const calculateSummary = useCallback(
    (activities: Array<Activity>) => {
      const distances = activities.map((activity) => activity.distance);
      const elevations = activities.map((activity) => activity.elevationGain);
      const speeds = activities.map((activity) => activity.averageSpeed);
      const times = activities.map((activity) => toDecimalTime(activity.time));
      const daysInBetween = calculateDaysInBetweenDates(
        activities[activities.length - 1].date,
        activities[0].date,
      );
      return {
        totalDistance: calculateTotal(distances),
        averageDistance: calculateMean(distances),
        maxDistance: Math.max(...distances),
        minDistance: Math.min(...distances),

        totalTime: toStringTime(calculateTotal(times)),
        averageTime: toStringTime(calculateMean(times)),
        maxTime: toStringTime(Math.max(...times)),
        minTime: toStringTime(Math.min(...times)),

        totalElevation: calculateTotal(elevations),
        averageElevation: calculateMean(elevations),
        maxElevation: Math.max(...elevations),
        minElevation: Math.min(...elevations),

        averageSpeed: calculateMean(speeds),
        maxSpeed: Math.max(...speeds),
        minSpeed: Math.min(...speeds),

        totalDays: daysInBetween,
        daysActive: activities.length,
        daysInactive: daysInBetween - activities.length,
        activityRatio: calculatePercentageRatio(
          activities.length,
          daysInBetween,
        ),
      } as Summary;
    },
    [calculateTotal, toDecimalTime, calculateMean],
  );

  const monthActivities = useMemo(() => {
    return activities.reduce((acc, activity) => {
      const date = new Date(activity.date);
      const month: string = new Intl.DateTimeFormat("fr-FR", {
        month: "long",
      }).format(date);

      // Find the index of the existing array for the month, or -1 if not found
      const index = acc.findIndex((monthArray) => monthArray.month === month);

      if (index !== -1) {
        // If the month array already exists, push the new activity to it
        acc[index].activities.push(activity);
      } else {
        // If the month array doesn't exist, create a new array for the month
        acc.push({
          month: month,
          activities: [activity],
          summary: {} as Summary,
        });
      }

      return acc;
    }, [] as Array<MonthStats>);
  }, [activities]);

  const monthStats: Array<MonthStats> = useMemo(() => {
    return monthActivities.map((month) => {
      return { ...month, summary: calculateSummary(month.activities) };
    });
  }, [monthActivities]);

  const globalStats: AllStats = useMemo(() => {
    return { monthStats: monthStats, summary: calculateSummary(activities) };
  }, [monthStats, activities]);

  return globalStats;
};
