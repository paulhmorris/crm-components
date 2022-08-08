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

export const getActiveTabIndex = (
  prevTabData: TabDetails[],
  newTabData: TabDetails[],
  prevTabTitle: string,
  prevActiveTabIndex: number
) => {
  //Get previous active title
  const activeTab: TabDetails = prevTabData[prevActiveTabIndex];
  //If the closed tab wasn't the active, Find the new index for the previous active tab.
  if (activeTab.title !== prevTabTitle) {
    return newTabData.findIndex((tab) => tab.title === activeTab.title);
  }
  return null;
};
