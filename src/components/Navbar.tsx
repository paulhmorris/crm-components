import { Tab } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TabManagerContext } from "../contexts/TabManagerContext";
import { TabDetails } from "../types";

const Navbar = () => {
  const navigate = useNavigate();
  const { tabs, setTabs, selectedTabIndex, setSelectedTabIndex } =
    useContext(TabManagerContext);
  //WHEN A USER CLOSES A TAB USING 'X' BUTTON ON THE TAB
  const closeTab = (title: string) => {
    //Remove Deleted Tab from Tab Data
    const updatedTabsData: TabDetails[] = tabs.filter(
      (tab: TabDetails) => tab.title !== title
    );
    //Track Active Tab
    const activeTab: TabDetails = tabs[selectedTabIndex];
    let activeTabIndex: number | null = null;
    if(activeTab.title !== title) {
       activeTabIndex = updatedTabsData.findIndex(tab => tab.title === activeTab.title)
    }
      //IF THERE ARE TABS REMAINING
    if (updatedTabsData.length) {
      if(activeTabIndex) {
        //if the closed tab wasn't the active tab, the active tab will remain active
        setSelectedTabIndex(activeTabIndex);
        navigate(updatedTabsData[activeTabIndex].route);
      } else {
        //If the closed tab was the active tab, the next active tab will the last tab
        setSelectedTabIndex(updatedTabsData.length - 1);
        navigate(updatedTabsData[updatedTabsData.length - 1].route);
      }
    } else {
      //IF THERE ARE NO TABS REMAINING
      navigate("/");
      setSelectedTabIndex(null);
    }
    setTabs(updatedTabsData);
  };
  //Redirect When a User Clicks on a Tab
  const redirect = (route: string, tabIndex: number) => {
    setSelectedTabIndex(tabIndex);
    navigate(route);
    return;
  };

  return (
    <nav className="mb-10 w-full ml-60">
      <Tab.Group selectedIndex={selectedTabIndex}>
        <Tab.List className="space-x-4">
          {tabs.map(({ title, route }: TabDetails, index: number) => (
            <Tab key={title} className="relative">
              {({ selected }) => (
                <>
                  <div className="peer flex items-center pr-5">
                    <span
                      className={selected ? "tab tab-active" : "tab"}
                      onClick={() => redirect(route, index)}
                    >
                      {title}
                    </span>
                  </div>
                  <span
                    className="absolute top-0 right-0 text-transparent transition-colors duration-75 hover:text-gray-400 peer-hover:text-gray-300"
                    onClick={() => closeTab(title)}
                  >
                    <XIcon className="-ml-2 h-4 w-4" />
                  </span>
                </>
              )}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
      <hr className="mt-[3px]" />
    </nav>
  );
};

export default Navbar;
