export interface ServicePoint {
  id: number;
  isDefault: boolean;
  name: string;
}

export interface ServiceBreak {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
}

export interface Submarket {
  id: string;
  marketId: number;
  name: string;
  shortName: string;
  type: number;
  serviceBreaks: ServiceBreak[];
  servicePoints: ServicePoint[];
}

export type GetSubmarkets = Promise<Submarket[]>;
