export interface PositionMarker {
  date: string;
  startPos: [number, number];
  endPos: [number, number];
  startPointName: string;
  endPointName: string;
  endCountryName: string;
  distance: number;
  time: string;
}

export interface CumulatedMarker {
  distance: number;
  time: string;
}
