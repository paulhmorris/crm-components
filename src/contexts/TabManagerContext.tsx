import { useLocalStorage } from "hooks/useLocalStorage";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { tabReducer } from "utils/tabReducer";
import { GlobalTab, TabManagerContextType } from "./types";

export const TabManagerContext = createContext({} as TabManagerContextType);

export const TabManagerProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [storedTabs, setStoredTabs] = useLocalStorage<GlobalTab[]>("tabs", []);
  const initialIndex = storedTabs.findIndex((t) => t.isActive);
  const [selectedTabIndex, setSelectedTabIndex] = useState(
    initialIndex === -1 ? 0 : initialIndex
  );
  const [tabState, dispatch] = useReducer(tabReducer, storedTabs);

  const openTab = useCallback((tab: GlobalTab) => {
    dispatch({
      type: "OPEN",
      payload: tab,
    });
  }, []);

  const closeTab = useCallback((tab: GlobalTab) => {
    dispatch({
      type: "CLOSE",
      payload: tab,
    });
  }, []);

  const changeTab = useCallback((tab: GlobalTab) => {
    dispatch({
      type: "CHANGE",
      payload: tab,
    });
  }, []);

  useEffect(() => {
    const activeTabIndex = tabState.findIndex((t) => t.isActive);
    setSelectedTabIndex(activeTabIndex === -1 ? 0 : activeTabIndex);
    setStoredTabs(tabState);
  }, [tabState]);

  useEffect(() => {
    if (tabState.length > 0 && tabState[selectedTabIndex]) {
      navigate(tabState[selectedTabIndex].route);
    }
  }, [selectedTabIndex, tabState]);

  return (
    <TabManagerContext.Provider
      value={{
        tabState,
        openTab,
        closeTab,
        changeTab,
        selectedTabIndex,
        setSelectedTabIndex,
      }}
    >
      {children}
    </TabManagerContext.Provider>
  );
};
