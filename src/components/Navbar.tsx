import { Tab } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { useTabs } from "contexts/TabContext";

const Navbar = () => {
  const { tabs, closeTab, changeTab, selectedTabIndex } = useTabs();

  if (!tabs || typeof selectedTabIndex === "undefined")
    return <p>Loading...</p>;

  return (
    <nav className="mb-10 ml-[212px] w-full">
      <Tab.Group
        selectedIndex={selectedTabIndex}
        onChange={(index) => changeTab(tabs[index])}
      >
        <Tab.List className="space-x-4">
          {tabs.map((tab) => (
            <Tab key={tab.title} className="relative">
              {({ selected }) => (
                <>
                  <div className="peer flex items-center pr-5">
                    <span className={selected ? "tab tab-active" : "tab"}>
                      {tab.title}
                    </span>
                  </div>
                  {tabs.length > 1 && (
                    <span
                      role="button"
                      tabIndex={0}
                      className="absolute top-0 right-0 text-transparent transition-colors duration-75 hover:text-gray-400 peer-hover:text-gray-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        closeTab(tab);
                      }}
                    >
                      <XIcon className="-ml-2 h-4 w-4" />
                    </span>
                  )}
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
