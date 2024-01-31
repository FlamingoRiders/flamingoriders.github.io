import { useCallback, useMemo } from "react";

interface Activity {
    date: string;
    distance: number;
    time: string;
    averageSpeed: number;
    elevationGain: number;
}

interface MonthStats {
    month: string;
    activities: Array<Activity>;
    summary: Summary;
}

interface AllStats {
    monthStats: Array<MonthStats>;
    summary: Summary;
}

interface Summary {
    totalDistance: number;
    averageDistance: number;
    maxDistance: number;
    minDistance: number;
    
    totalTime: string;
    averageTime: string;
    maxTime: string;
    minTime: string;

    totalElevation: number;
    averageElevation: number;
    maxElevation: number;
    minElevation: number;

    averageSpeed: number;
    maxSpeed: number;
    minSpeed: number;
}

export const useStats = (activities: Array<Activity>) => {

    const calculateTotal = useCallback((elements: Array<number>) => {
        const total = elements.reduce((sum, element) => {
            return sum + element 
        }, 0);

        return +total.toFixed(2);
    }, []);

    const calculateMean = useCallback((elements: Array<number>) => {
        const mean = calculateTotal(elements) / elements.length;
        return +mean.toFixed(2);
    }, [calculateTotal]);

    const toDecimalTime = useCallback((time: string): number => {
        const [hours, minutes] = time.split(':');
        return (+hours + (+minutes/60));
    }, []);

    const toStringTime = useCallback((time: number): string => {
        // Separate whole hours and decimal part
        const hours = Math.floor(time);
        const decimalPart = time - hours;

        // Convert decimal part to minutes
        const minutes = Math.round(decimalPart * 60);

        const hoursLabel = hours > 1 ? 'heures': 'heure';
        const minutesLabel = minutes > 1 ? 'minutes': 'minute';

        if (hours < 1) {
            return `${minutes} ${minutesLabel}`;
        }

        return `${hours} ${hoursLabel} et ${minutes} ${minutesLabel}`;
    }, []);

    const calculateSummary = useCallback((monthActivities: Array<Activity>) => {
        const distances = monthActivities.map(activity => activity.distance);
        const elevations = monthActivities.map(activity => activity.elevationGain);
        const speeds = monthActivities.map(activity => activity.averageSpeed);
        const times = monthActivities.map(activity => toDecimalTime(activity.time));
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
        } as Summary;
    }, [calculateTotal, toDecimalTime, calculateMean]);

    const monthActivities = useMemo(() => {
        return activities.reduce((acc, activity) => {

            const date = new Date(activity.date);
            const month: string = new Intl.DateTimeFormat("fr-FR", { month: "long" }).format(date);
    
            // Find the index of the existing array for the month, or -1 if not found
            const index = acc.findIndex((monthArray) => monthArray.month === month);
    
            if (index !== -1) {
                // If the month array already exists, push the new activity to it
                acc[index].activities.push(activity);
            } else {
                // If the month array doesn't exist, create a new array for the month
                acc.push({month: month, activities: [activity], summary: {} as Summary});
            }
    
            return acc;
        }, [] as Array<MonthStats>);
    }, [activities]); 
    
    const monthStats: Array<MonthStats> = useMemo(() => {
        return monthActivities.map(month => {
            return {...month, summary: calculateSummary(month.activities)}
        });
    }, [monthActivities]);

    const globalStats: AllStats = useMemo(() => {
        return {monthStats: monthStats, summary: calculateSummary(activities)}
    }, [monthStats, activities]);
    
    console.log("globalStats", globalStats);
    return globalStats;
}