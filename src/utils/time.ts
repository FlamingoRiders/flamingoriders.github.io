export const toDecimalTime = (time: string): number => {
  const [hours, minutes] = time.split(":");
  return +hours + +minutes / 60;
};

export const toStringTime = (time: number): string => {
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
};

export const calculateDaysInBetweenDates = (
  dateString1: string,
  dateString2: string,
) => {
  // The number of milliseconds in one day
  const MS_IN_ONE_DAY = 1000 * 3600 * 24;

  const date1 = new Date(dateString1);
  const date2 = new Date(dateString2);
  const timeDifference = Math.abs(date2.getTime() - date1.getTime());
  return Math.round(timeDifference / MS_IN_ONE_DAY) + 1;
};
