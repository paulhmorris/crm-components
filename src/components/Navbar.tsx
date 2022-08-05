import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TabManagerContext } from "../contexts/TabManagerContext";
import { Tab } from "@headlessui/react";
import { TabDetails } from "../types";

const Navbar = () => {
  const navigate = useNavigate();
  const { tabs, setTabs, selectedTabIndex, setSelectedTabIndex } =
    useContext(TabManagerContext);
  //WHEN A USER CLOSES A TAB USING 'X' BUTTON ON THE TAB
  const closeTab = (title: string) => {
    const updatedTabsData: TabDetails[] = tabs.filter(
      (tab: TabDetails) => tab.title !== title
    );
    if (updatedTabsData.length) {
      //IF THERE ACTIVE TAB/S REMAINING
      setSelectedTabIndex(updatedTabsData.length - 1);
      navigate(updatedTabsData[updatedTabsData.length - 1].route);
    } else {
      //IF THERE ARE NO TABS REMAINING
      navigate("/");
      setSelectedTabIndex(null);
    }
    setTabs(updatedTabsData);
  };
  //REDIRECT WHEN A USER CLICKS ON A TAB
  const redirect = (route: string, tabIndex: number) => {
    setSelectedTabIndex(tabIndex);
    navigate(route);
    return;
  };

  return (
    <nav className="mb-10 flex w-full justify-center space-x-4 border-b-2 border-blue-100 pb-2">
      <Tab.Group selectedIndex={selectedTabIndex}>
        <Tab.List>
          {tabs.map((tab: TabDetails, i: number) => {
            return (
              <Tab
                key={i}
                className={
                  selectedTabIndex === i ? "tab tab-active mx-4" : "tab mx-4"
                }
              >
                <>
                  <span onClick={() => redirect(tab.route, i)}>
                    {tab.title}{" "}
                  </span>{" "}
                  <span
                    className="text-gray-400"
                    onClick={() => closeTab(tab.title)}
                  >
                    x
                  </span>
                </>
              </Tab>
            );
          })}
        </Tab.List>
      </Tab.Group>
    </nav>
  );
};

export default Navbar;
