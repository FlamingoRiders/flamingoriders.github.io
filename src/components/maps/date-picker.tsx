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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        fontFamily: "Montserrat",
      }}
    >
      <label htmlFor="marker-select">
        La position du jour&nbsp;:&nbsp;&nbsp;
      </label>
      <input
        type="date"
        id="start"
        name="marker-select"
        value={selectedDate}
        min={startDate}
        max={lastDate}
        onChange={(e) => onChangeDate(e.target.value)}
      />
    </div>
  );
};

export default DatePicker;
