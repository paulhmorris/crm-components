import { SetStateAction, Dispatch } from "react";
import { TabDetails } from '../types';

export const TabControl = (
  tabs: TabDetails[],
  setTabs: Dispatch<SetStateAction<TabDetails[] | null>>,
  setSelectedTabIndex: Dispatch<SetStateAction<number | null>>,
  navigate: (value: string) => void,
  title: string,
  route: string
) => {
  let isTabOpen;
  let tabIndex = 0;
  tabs.forEach((tab: TabDetails, i: number) => {
    if(tab.title === title) {
      isTabOpen = true;
      tabIndex = i;
    }

  } )
  if(isTabOpen) {
    //EXISTING TAB
    setSelectedTabIndex(tabIndex);
  } else {
    //NEW TAB
    setSelectedTabIndex(tabs.length);
    setTabs([...tabs, { title, route }]);
  }
  navigate(route);
};
