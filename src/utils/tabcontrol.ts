import { Dispatch, SetStateAction } from "react";
import { TabDetails } from "../types";

export const tabControl = (
  tabs: TabDetails[],
  setTabs: Dispatch<SetStateAction<TabDetails[] | null>>,
  setSelectedTabIndex: Dispatch<SetStateAction<number | null>>,
  navigate: (value: string) => void,
  title: string,
  route: string
) => {
  //Find if the tab is already open
  let isTabOpen = false;
  let tabIndex = 0;
  tabs.forEach((tab: TabDetails, i: number) => {
    if (tab.title === title) {
      isTabOpen = true;
      tabIndex = i;
    }
  });
  if (isTabOpen) {
    //Existing Tab
    setSelectedTabIndex(tabIndex);
  } else {
    //New Tab
    setSelectedTabIndex(tabs.length);
    setTabs([...tabs, { title, route }]);
  }
  navigate(route);
};
