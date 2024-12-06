import React from "react";

interface DateAndLocationProps {
  date: string;
  location: string;
}

const DateAndLocation: React.FC<DateAndLocationProps> = ({
  date,
  location,
}) => {
  return (
    <>
      {date}
      {location && ` : ${location}`}
    </>
  );
};

export default DateAndLocation;
