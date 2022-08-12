import { Tab } from "@headlessui/react";
import { ServicePoints } from "./ServicePoints";

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
    <Tab.Group defaultIndex={0}>
      <Tab.List className="tab-list mb-10">
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
          <div className="p-6">
            <p>Processors 👋🏼</p>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="p-6">
            <p>Routes 👋🏼</p>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <ServicePoints />
        </Tab.Panel>
        <Tab.Panel>
          <div className="p-6">
            <p>Coupons 👋🏼</p>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="p-6">
            <p>Groups 👋🏼</p>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="p-6">
            <p>Employees 👋🏼</p>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="p-6">
            <p>Pricing 👋🏼</p>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="p-6">
            <p>Subscriptions 👋🏼</p>
          </div>
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
