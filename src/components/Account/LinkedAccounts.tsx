import { Button } from "components/Button";
import { DropdownMenu } from "components/DropdownMenu";
import { DropdownMenuItem } from "components/DropdownMenuItem";
import { LinkedAccountModal } from "components/Modals/LinkedAccountModal";
import { mockLinkedAccounts } from "mockData";
import { useState } from "react";
import { formatPhone } from "utils/helpers";

export const LinkedAccounts = ({
  linkedAccounts,
}: {
  linkedAccounts: typeof mockLinkedAccounts;
}) => {
  const [showAddModal, setShowAddModal] = useState(false);

  if (linkedAccounts.length === 0) {
    return (
      <div className="flex min-h-[200px] flex-col items-center justify-center space-y-4">
        <p>There are no accounts linked yet.</p>
        <Button onClick={() => setShowAddModal(true)} variant="secondary">
          Add Linked Account
        </Button>
      </div>
    );
  }

  return (
    <>
      {linkedAccounts.map((account) => (
        <div
          key={account.id}
          className="flex justify-between border-b border-gray-200 py-5 px-6"
        >
          <div className="space-y-0.5">
            <a className="block" href="#">
              {account.name}
            </a>
            <p>{account.type}</p>
          </div>
          <div className="ml-auto mr-4 space-y-0.5 text-right">
            <p>{formatPhone(account.phone)}</p>
            <a className="block lowercase" href="#">
              {account.email}
            </a>
          </div>
          <DropdownMenu variant="kebab">
            <DropdownMenuItem>Remove Link</DropdownMenuItem>
          </DropdownMenu>
        </div>
      ))}
      <div className="grid place-items-center py-5">
        <Button onClick={() => setShowAddModal(true)} variant="secondary">
          Add Linked Account
        </Button>
      </div>
      <LinkedAccountModal isOpen={showAddModal} setIsOpen={setShowAddModal} />
    </>
  );
};
