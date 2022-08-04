import { useState, useEffect, createContext, ReactNode, SetStateAction, Dispatch } from "react";
import { getLocalStorage, setLocalStorage } from '../utils/test';

interface TabType {
    title: string;
    route: string;
}

interface TabManagerContextType {
    tabs: [];
    setTabs: Dispatch<SetStateAction<TabType | null>>;
    selectedTabIndex: number | null;
    setSelectedTabIndex: Dispatch<SetStateAction<number | null>>;
}
interface TabManagerProviderProps {
    children: ReactNode;
}
export const TabManagerContext = createContext({} as TabManagerContextType);

export const TabManagerProvider = ({ children }: TabManagerProviderProps) => {

    const [tabs, setTabs] = useState(() => getLocalStorage("tab"));
    const [selectedTabIndex, setSelectedTabIndex] = useState(() => getLocalStorage("tabIndex"));

    useEffect(() => {
        setLocalStorage("tab", tabs);
        setLocalStorage("tabIndex", selectedTabIndex);
    }, [tabs, selectedTabIndex]);

    return (
        <TabManagerContext.Provider value={{ tabs, setTabs, selectedTabIndex, setSelectedTabIndex }}>
            {children}
        </TabManagerContext.Provider>
    )
};
