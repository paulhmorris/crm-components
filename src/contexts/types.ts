import { Dispatch, SetStateAction } from "react";

export interface GlobalTab {
  title: string;
  route: string;
  isActive: boolean;
  [key: string]: number | string | boolean;
}

export interface TabContextType {
  tabs: GlobalTab[];
  selectedTabIndex: number;
  setSelectedTabIndex: Dispatch<SetStateAction<number>>;

  openTab: (tab: GlobalTab) => void;
  closeTab: (tab: GlobalTab) => void;
  changeTab: (tab: GlobalTab) => void;
}
