export interface Day {
  distance: number;
  time: string;
  weather?: string;
  mood?: number;
  startPointName?: string;
  endPointName?: string;
  pictures?: Array<string>;
}
