import { AllStats, MonthStats } from "models/stats";
import React from "react";
import { useCallback, useMemo, useState } from "react";
import Activities from "./activities";
import CategoryPicker from "./category-picker";
import Summary from "./summary";

interface BikeStatsProps {
    stats: AllStats;
}

const BikeStats: React.FC<BikeStatsProps> = ({ stats }) => {
    const daysActiveCaption = "Jours pédalés";

    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);

    const onSelectCategory = useCallback(
        (index: number) => {
            setSelectedCategoryIndex(index);
        },
        [setSelectedCategoryIndex],
    );

    const categories = [
        "Global",
        ...stats.monthStats.map((monthStat) => monthStat.month),
    ];

    const selectedMonthStat: MonthStats | undefined = useMemo(() => {
        if (selectedCategoryIndex === 0) {
            return undefined;
        }

        return stats.monthStats[selectedCategoryIndex - 1];
    }, [selectedCategoryIndex]);

    return (
        <>
            <p>Les stats pour une idée plus concrète de nos journées à vélo.</p>
            <CategoryPicker
                onSelectCategory={onSelectCategory}
                categories={categories}
                selectedIndex={selectedCategoryIndex}
            />

            {selectedMonthStat ? (
                <>
                    <Summary
                        statisticsCaption={`Statistiques du mois`}
                        daysActiveCaption={daysActiveCaption}
                        summary={selectedMonthStat.summary}
                    />
                    <Activities
                        activities={selectedMonthStat.activities}
                        caption={`Détail des activités`}
                    />
                </>
            ) :
                <Summary
                    statisticsCaption={`Statistiques globales`}
                    daysActiveCaption={daysActiveCaption}
                    summary={stats.summary}
                />}
        </>
    );
};

export default BikeStats;
