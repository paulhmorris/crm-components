import { Tab } from "@headlessui/react";
import { Coupons } from "./Coupons";
import { Employees } from "./Employees";
import { Groups } from "./Groups";
import { MarketRoutes } from "./MarketRoutes";
import { Processors } from "./Processors";
import { ServicePoints } from "./ServicePoints";
import { Subscriptions } from "./Subscriptions";

const tabs = [
  "Processors",
  "Routes",
  "Service Points",
  "Coupons",
  "Groups",
  "Employees",
  "Pricing",
  "Subscriptions",
  "Submarkets",
];

export const MarketTabs = () => {
  return (
    <Tab.Group>
      <Tab.List className="tab-list mb-6">
        {tabs.map((tab) => (
          <Tab
            key={tab}
            className={({ selected }) => (selected ? "tab tab-active" : "tab")}
          >
            {tab}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <Processors />
        </Tab.Panel>
        <Tab.Panel>
          <MarketRoutes />
        </Tab.Panel>
        <Tab.Panel>
          <ServicePoints />
        </Tab.Panel>
        <Tab.Panel>
          <Coupons />
        </Tab.Panel>
        <Tab.Panel>
          <Groups />
        </Tab.Panel>
        <Tab.Panel>
          <Employees />
        </Tab.Panel>
        <Tab.Panel>
          <div className="p-6">
            <p>Pricing 👋🏼</p>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <Subscriptions />
        </Tab.Panel>
        <Tab.Panel>
          <div className="p-6">
            <p>Submarkets 👋🏼</p>
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
