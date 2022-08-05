import { Tab } from "@headlessui/react";
import { personalDetails } from "mockData";
import { AccountBags } from "./AccountBags";
import { AccountCoupons } from "./AccountCoupons";
import { AccountPaymentMethods } from "./AccountPaymentMethods";
import { AccountPlans } from "./AccountPlans";
import { PersonalDetails } from "./PersonalDetails";

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
          <PersonalDetails
            fullName={personalDetails.fullName}
            email={personalDetails.email}
            address={personalDetails.address}
            phone={personalDetails.phone}
            group={personalDetails.group}
            autoRenew={personalDetails.autoRenew}
            onHold={personalDetails.onHold}
          />
        </Tab.Panel>
        <Tab.Panel>
          <AccountPlans />
        </Tab.Panel>
        <Tab.Panel>
          <AccountBags />
        </Tab.Panel>
        <Tab.Panel>
          <AccountPaymentMethods />
        </Tab.Panel>
        <Tab.Panel>
          <AccountCoupons />
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
