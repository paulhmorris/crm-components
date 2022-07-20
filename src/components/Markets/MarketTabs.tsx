import { Tab } from "@headlessui/react";

export const MarketTabs = () => {
  return (
    <Tab.Group defaultIndex={0}>
      <Tab.List className="tab-list">
        <Tab
          className={({ selected }) => (selected ? "tab tab-active" : "tab")}
        >
          Routes
        </Tab>
        <Tab
          className={({ selected }) => (selected ? "tab tab-active" : "tab")}
        >
          Route Stops
        </Tab>
        <Tab
          className={({ selected }) => (selected ? "tab tab-active" : "tab")}
        >
          Pricing
        </Tab>
        <Tab
          className={({ selected }) => (selected ? "tab tab-active" : "tab")}
        >
          Coupons
        </Tab>
        <Tab
          className={({ selected }) => (selected ? "tab tab-active" : "tab")}
        >
          Vehicles
        </Tab>
        <Tab
          className={({ selected }) => (selected ? "tab tab-active" : "tab")}
        >
          Employees
        </Tab>
        <Tab
          className={({ selected }) => (selected ? "tab tab-active" : "tab")}
        >
          Pricing
        </Tab>
        <Tab
          className={({ selected }) => (selected ? "tab tab-active" : "tab")}
        >
          Subscriptions
        </Tab>
        <Tab
          className={({ selected }) => (selected ? "tab tab-active" : "tab")}
        >
          Submarkets
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <div className="p-6">
            <p>Routes 👋🏼</p>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="p-6">
            <p>Route Stops 👋🏼</p>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="p-6">
            <p>Pricing 👋🏼</p>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="p-6">
            <p>Coupons 👋🏼</p>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="p-6">
            <p>Vehicles 👋🏼</p>
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
