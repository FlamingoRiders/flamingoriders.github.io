import { useCallback, useMemo } from "react";
import { Activity, Summary, MonthStats, AllStats, CountryStats } from "models/stats";
import { calculateDaysInBetweenDates, toDecimalTime } from "utils/time";
import {
  calculateTotal,
  calculateMean,
  calculatePercentageRatio,
} from "utils/calculator";
import { getMonthName } from "utils/date";

export const useStats = (activities: Array<Activity>) => {

  const calculateSummary = useCallback((activities: Array<Activity>) => {
    const distances = activities.filter(activity => activity.distance).map((activity) => activity.distance);
    const elevations = activities.filter(activity => activity.elevationGain).map((activity) => activity.elevationGain);
    const speeds = activities.filter(activity => activity.averageSpeed).map((activity) => activity.averageSpeed);
    const times = activities.filter(activity => activity.time).map((activity) => toDecimalTime(activity.time));
    const daysInBetween = calculateDaysInBetweenDates(
      activities[activities.length - 1].date,
      activities[0].date,
    );

    const activeDays = activities.filter(activity => activity.distance && activity.time);

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
      daysActive: activeDays.length,
      daysInactive: daysInBetween - activeDays.length,
      activityRatio: calculatePercentageRatio(activeDays.length, daysInBetween),
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

export const useCountryStats = (activities: Array<Activity>) => {

  const countryStats: Map<String, CountryStats> = useMemo(() => {

    const stats: Map<String, CountryStats> = new Map();

    activities.forEach(activity => {
      const countryStats = stats.get(activity.endCountryName);
      if (countryStats) {
        stats.set(activity.endCountryName, { days: countryStats.days + 1, distance: +(countryStats.distance + activity.distance).toFixed(2) })
      } else {
        stats.set(activity.endCountryName, { days: 1, distance: activity.distance ? +activity.distance.toFixed(2) : 0 });
      }
    });

    return stats;
  }, [activities]);

  return countryStats;
}
