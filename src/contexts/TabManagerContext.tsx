import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { TabDetails } from "../types";
import { getLocalStorage, setLocalStorage } from "../utils/storage";
interface TabManagerContextType {
  tabs: TabDetails[];
  setTabs: Dispatch<SetStateAction<TabDetails[] | null>>;
  selectedTabIndex: number;
  setSelectedTabIndex: Dispatch<SetStateAction<number | null>>;
}
interface TabManagerProviderProps {
  children: ReactNode;
}
export const TabManagerContext = createContext({} as TabManagerContextType);

export const TabManagerProvider = ({ children }: TabManagerProviderProps) => {
  const [tabs, setTabs] = useState(() => getLocalStorage("tabs"));
  const [selectedTabIndex, setSelectedTabIndex] = useState(() =>
    getLocalStorage("activeTabIndex")
  );

  useEffect(() => {
    setLocalStorage("tabs", tabs);
    setLocalStorage("activeTabIndex", selectedTabIndex);
  }, [tabs, selectedTabIndex]);

  return (
    <TabManagerContext.Provider
      value={{ tabs, setTabs, selectedTabIndex, setSelectedTabIndex }}
    >
      {children}
    </TabManagerContext.Provider>
  );
};
