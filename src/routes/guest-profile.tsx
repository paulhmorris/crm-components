import { AccountNotesTabs } from "components/Account/AccountNotesTabs";
import { AccountOverviewTabs } from "components/Account/AccountOverviewTabs";
import { AccountTabs } from "components/Account/AccountTabs";
import {
  AccountHeader,
  AccountHeaderProps,
} from "../components/Account/AccountHeader";

const mockAccount: AccountHeaderProps = {
  fullName: "Johnny Rocket",
  createDate: new Date(2020, 4, 1).toDateString(),
  groupId: 42,
  groupName: "Cartoon Network",
  isLead: true,
  acceptTerms: false,
};

export default function GuestProfile() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <AccountHeader
        fullName={mockAccount.fullName}
        createDate={mockAccount.createDate}
        groupId={mockAccount.groupId}
        groupName={mockAccount.groupName}
        isLead={mockAccount.isLead}
        acceptTerms={mockAccount.acceptTerms}
      />
      <div className="mt-8">
        <AccountOverviewTabs />
      </div>
      <div className="mt-8">
        <AccountNotesTabs />
      </div>
      <div className="mt-8">
        <AccountTabs />
      </div>
    </div>
  );
}
