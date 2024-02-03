export interface Activity {
  date: string;
  distance: number;
  time: string;
  averageSpeed: number;
  elevationGain: number;
}

export interface Summary {
  totalDistance: number;
  averageDistance: number;
  maxDistance: number;
  minDistance: number;

  totalTime: number;
  averageTime: number;
  maxTime: number;
  minTime: number;

  totalElevation: number;
  averageElevation: number;
  maxElevation: number;
  minElevation: number;

  averageSpeed: number;
  maxSpeed: number;
  minSpeed: number;

  totalDays: number;
  daysActive: number;
  daysInactive: number;
  activityRatio: number;
}

export interface MonthStats {
  month: string;
  activities: Array<Activity>;
  summary: Summary;
}

export interface AllStats {
  monthStats: Array<MonthStats>;
  summary: Summary;
}
