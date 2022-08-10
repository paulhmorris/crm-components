import { useLocalStorage } from "hooks/useLocalStorage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { tabReducer } from "utils/tabReducer";
import { GlobalTab, TabContextType } from "./types";

const TabContext = createContext({} as TabContextType);

const TabProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [storedTabs, setStoredTabs] = useLocalStorage<GlobalTab[]>("tabs", []);
  const initialIndex = storedTabs.findIndex((t) => t.isActive);
  const [selectedTabIndex, setSelectedTabIndex] = useState(
    initialIndex === -1 ? 0 : initialIndex
  );
  const [tabs, dispatch] = useReducer(tabReducer, storedTabs);

  const openTab = (tab: GlobalTab) => {
    dispatch({
      type: "OPEN",
      payload: tab,
    });
  };

  const closeTab = (tab: GlobalTab) => {
    dispatch({
      type: "CLOSE",
      payload: tab,
    });
  };

  const changeTab = (tab: GlobalTab) => {
    dispatch({
      type: "CHANGE",
      payload: tab,
    });
  };

  useEffect(() => {
    const activeTabIndex = tabs.findIndex((t) => t.isActive);
    setSelectedTabIndex(activeTabIndex === -1 ? 0 : activeTabIndex);
    setStoredTabs(tabs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabs]);

  useEffect(() => {
    if (tabs.length > 0 && tabs[selectedTabIndex]) {
      navigate(tabs[selectedTabIndex].route);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTabIndex, tabs]);

  const value = {
    tabs,
    openTab,
    closeTab,
    changeTab,
    selectedTabIndex,
    setSelectedTabIndex,
  };

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};

const useTabs = () => {
  const context = useContext(TabContext);
  if (context === undefined) {
    throw new Error("useTabs must be used within a TabProvider");
  }
  return context;
};

export { TabProvider, useTabs };
