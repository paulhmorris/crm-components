import { Tab } from "@headlessui/react";

export const AccountTabs = () => {
  return (
    <Tab.Group defaultIndex={0}>
      <Tab.List className="tab-list">
        <Tab
          className={({ selected }) => (selected ? "tab tab-active" : "tab")}
        >
          Personal
        </Tab>
        <Tab
          className={({ selected }) => (selected ? "tab tab-active" : "tab")}
        >
          Plans
        </Tab>
        <Tab
          className={({ selected }) => (selected ? "tab tab-active" : "tab")}
        >
          Bags
        </Tab>
        <Tab
          className={({ selected }) => (selected ? "tab tab-active" : "tab")}
        >
          Payment Methods
        </Tab>
        <Tab
          className={({ selected }) => (selected ? "tab tab-active" : "tab")}
        >
          Coupons
        </Tab>
        <Tab
          className={({ selected }) => (selected ? "tab tab-active" : "tab")}
        >
          Transactions
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <div className="p-6">
            <p>Personal 👋🏼</p>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="p-6">
            <p>Plans 👋🏼</p>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="p-6">
            <p>Bags 👋🏼</p>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="p-6">
            <p>Payment Methods 👋🏼</p>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="p-6">
            <p>Coupons 👋🏼</p>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="p-6">
            <p>Transactions 👋🏼</p>
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
