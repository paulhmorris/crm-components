import { Tab } from "@headlessui/react";
import { AccountOverview } from "./AccountOverview";

export const AccountOverviewTabs = () => {
  return (
    <Tab.Group defaultIndex={0}>
      <Tab.List className="tab-list">
        <Tab
          className={({ selected }) => (selected ? "tab tab-active" : "tab")}
        >
          Overview
        </Tab>
        <Tab
          className={({ selected }) => (selected ? "tab tab-active" : "tab")}
        >
          Linked Accounts
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <AccountOverview />
        </Tab.Panel>
        <Tab.Panel>
          <div className="p-6">
            <p>Linked Accounts 👋🏼</p>
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
