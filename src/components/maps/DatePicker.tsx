import React from "react";

interface DatePickerProps {
  selectedDate: string;
  startDate: string;
  lastDate: string;
  onChangeDate: (selectedDate: string) => void;
}
const DatePicker: React.FC<DatePickerProps> = ({
  startDate,
  lastDate,
  selectedDate,
  onChangeDate,
}) => {
  return (
    <>
      <label htmlFor="marker-select">Voir la position:&nbsp;</label>
      <input
        type="date"
        id="start"
        name="trip-start"
        value={selectedDate}
        min={startDate}
        max={lastDate}
        onChange={(e) => onChangeDate(e.target.value)}
      />
    </>
  );
};

export default DatePicker;
