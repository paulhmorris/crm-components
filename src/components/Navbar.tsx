import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TabManagerContext } from "../contexts/TabManagerContext";
import { Tab } from "@headlessui/react";

interface TabProps {
  title: string;
  route: string;
}

const Navbar = () => {
  const navigate = useNavigate();
  const { tabs, setTabs, selectedTabIndex, setSelectedTabIndex } =
    useContext(TabManagerContext);

  const closeTab = (title: string) => {
    const updatedTabsData = tabs.filter((tab: TabProps) => tab.title !== title);
    console.log({ updatedTabsData });
    console.log({ tabs });
    console.log({ title });
    if (updatedTabsData.length) {
      setSelectedTabIndex(updatedTabsData.length - 1);
      navigate(updatedTabsData[updatedTabsData.length - 1]?.route);
    } else {
      navigate("/");
      setSelectedTabIndex(null);
    }
    setTabs(updatedTabsData);
  };
  const redirect = (route: string, index: number) => {
    setSelectedTabIndex(index);
    navigate(route);
    return;
  };

  return (
    <nav className="mb-10 flex w-full space-x-4 border-b-2 border-gray-300 pb-2">
      <Tab.Group
        selectedIndex={selectedTabIndex}
        onChange={setSelectedTabIndex}
      >
        <Tab.List>
          {tabs.map((tab: { route: string; title: string }, i: number) => {
            return (
              <Tab
                key={i}
                className={({ selected }) =>
                  selected || selectedTabIndex === i
                    ? "tab tab-active mx-2"
                    : "tab mx-2"
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
