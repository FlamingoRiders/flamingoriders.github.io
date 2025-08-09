import { DayPictures } from "models/day-pictures";
import { useState, useMemo } from "react";

export const usePictures = (allPictures: Array<DayPictures>) => {

  const startDate = allPictures[0].date;
  const lastDate = allPictures[allPictures.length - 1].date;

  const [selectedDate, setSelectedDate] = useState<string>(startDate);

  const selectedDatePictures: DayPictures | undefined = useMemo(() => {
    return allPictures.find((p) => p.date === selectedDate);
  }, [selectedDate]);

  const hasPicturesForDay: boolean = useMemo(() => {
    const pictures = selectedDatePictures?.pictures || [];
    return pictures.length > 0;
  }, [selectedDatePictures]);

  return {
    startDate,
    lastDate,
    selectedDate,
    selectedDatePictures,
    hasPicturesForDay,
    onChangeDate: setSelectedDate,
  };
};
