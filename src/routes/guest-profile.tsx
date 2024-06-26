import { AccountNotesTabs } from "components/Account/AccountNotesTabs";
import { AccountOrderTracking } from "components/Account/AccountOrderTracking";
import { AccountOverviewTabs } from "components/Account/AccountOverviewTabs";
import { AccountTabs } from "components/Account/AccountTabs";
import { PepperNav } from "components/Navigation/PepperNav";
import { Sidebar } from "components/Navigation/Sidebar";
import { mockAccount } from "mockData";
import { AccountHeader } from "../components/Account/AccountHeader";

export default function GuestProfile() {
  return (
    <>
      <PepperNav />
      <div className="mx-[212px]">
        <AccountHeader
          fullName={mockAccount.fullName}
          createDate={mockAccount.createDate}
          groupId={mockAccount.groupId}
          groupName={mockAccount.groupName}
          isLead={mockAccount.isLead}
          acceptTerms={mockAccount.acceptTerms}
        />
        <div className="mt-10">
          <AccountOverviewTabs />
        </div>
        <div className="mt-10">
          <AccountNotesTabs />
        </div>
        <div className="mt-10">
          <AccountOrderTracking />
        </div>
        <div className="mt-10">
          <AccountTabs />
        </div>
      </div>
      <Sidebar />
    </>
  );
}
