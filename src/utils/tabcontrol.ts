interface TabProps {
  title: string;
  route: string;
}

export const TabControl = (
  tabs: TabProps[],
  setTabs: (value: TabProps[]) => void,
  setSelectedTabIndex: (value: number | null | undefined) => void,
  navigate: (value: string) => void,
  title: string,
  route: string
) => {
  let isTabOpen;
  let tabIndex;
  tabs.forEach((tab: TabProps, i: number) => {
    if(tab.title === title) {
      isTabOpen = true;
      tabIndex = i;
    }
  } )
  if(isTabOpen) {
    setSelectedTabIndex(tabIndex);
  } else {
    setSelectedTabIndex(tabs.length);
    setTabs([...tabs, { title, route }]);
  }
  navigate(route);
};
