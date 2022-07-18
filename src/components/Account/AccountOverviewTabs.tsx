import { Tab } from "@headlessui/react";
import { mockLinkedAccounts } from "mockData";
import { AccountOverview } from "./AccountOverview";
import { LinkedAccounts } from "./LinkedAccounts";

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
          <LinkedAccounts linkedAccounts={mockLinkedAccounts} />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
