export const getDayAndMonth = (value: string): string => {
  const date = new Date(value);
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "2-digit",
  }).format(date);
};

export const getMonthName = (value: string): string => {
  const date = new Date(value);
  return new Intl.DateTimeFormat("fr-FR", {
    month: "long",
  }).format(date);
};

export const getFullDate = (value: string): string => {
  const date = new Date(value);
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Europe/Paris",
  }).format(date);
};
