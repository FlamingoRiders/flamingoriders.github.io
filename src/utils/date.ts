export const getDayOfWeek = (value: string): string => {
  const date = new Date(value);
  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "short",
    day: "2-digit",
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

export const getPostDate = (value: string): string => {
  const date = new Date(value);
  return new Intl.DateTimeFormat('fr-FR').format(date).replace(/\//g, '-');
};