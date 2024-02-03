import { useCallback, useMemo } from "react";
import { Activity, Summary, MonthStats, AllStats } from "models/stats";
import { calculateDaysInBetweenDates, toDecimalTime } from "utils/time";
import {
  calculateTotal,
  calculateMean,
  calculatePercentageRatio,
} from "utils/calculator";
import { getMonthName } from "utils/date";

export const useStats = (activities: Array<Activity>) => {
  const calculateSummary = useCallback((activities: Array<Activity>) => {
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

      totalTime: calculateTotal(times),
      averageTime: calculateMean(times),
      maxTime: Math.max(...times),
      minTime: Math.min(...times),

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
      activityRatio: calculatePercentageRatio(activities.length, daysInBetween),
    } as Summary;
  }, []);

  const monthActivities = useMemo(() => {
    return activities.reduce((acc, activity) => {
      const month = getMonthName(activity.date);

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
    return monthActivities.map((month: { activities: any }) => {
      return { ...month, summary: calculateSummary(month.activities) };
    });
  }, [monthActivities]);

  const globalStats: AllStats = useMemo(() => {
    return { monthStats: monthStats, summary: calculateSummary(activities) };
  }, [monthStats, activities]);

  return globalStats;
};
