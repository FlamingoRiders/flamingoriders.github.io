export enum Unit {
  DISTANCE = "km",
  SPEED = "km/h",
  ELEVATION = "m",
  PERCENTAGE = "%",
}

export const formatInUnit = (value: number, unit: Unit): string => {
  return `${value} ${unit}`;
};
