import { Button } from "components/Button";
import { EditPersonalDetailsModal } from "components/Modals/EditPersonalDetailsModal";
import { useState } from "react";
import { PersonalDetailsProps } from "types";
import { formatPhone } from "utils/helpers";
import { ToggleAutoRenew } from "./ToggleAutoRenew";
import { ToggleOnHold } from "./ToggleOnHold";

export const PersonalDetails = ({
  fullName,
  email,
  phone,
  address,
  group,
  autoRenew,
  onHold,
}: PersonalDetailsProps) => {
  const [openEditDetails, setOpenEditDetails] = useState(false);

  return (
    <section className="flex w-full flex-col">
      <EditPersonalDetailsModal
        isOpen={openEditDetails}
        setIsOpen={setOpenEditDetails}
        defaultValues={{
          phone,
          email,
          firstName: "Johnny",
          lastName: "Rocket",
        }}
      />
      <div className="flex items-end justify-between border-b border-gray-200 px-6 py-3">
        <h4>Personal Details</h4>
        <Button
          onClick={() => setOpenEditDetails(true)}
          variant="tertiary"
          className="-mb-2"
        >
          Edit
        </Button>
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 p-6">
        <p className="text-left text-secondary">Name</p>
        <p className="text-right font-bold">{fullName}</p>
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-100 p-6">
        <p className="text-left text-secondary">Email</p>
        <p className="text-right font-bold lowercase">{email}</p>
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 p-6">
        <p className="text-left text-secondary">Phone</p>
        <p className="text-right font-bold">{formatPhone(phone)}</p>
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-100 p-6">
        <p className="text-left text-secondary">Home Address</p>
        <p className="text-right font-bold">{address}</p>
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 p-6">
        <p className="text-left text-secondary">Group</p>
        {group ? (
          <a href="#" className="text-right">
            {group.name}
          </a>
        ) : (
          <p className="text-right font-bold">No Group</p>
        )}
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-100 p-6">
        <p className="text-left text-secondary">
          Auto-Renew Academic Subscriptions
        </p>
        <ToggleAutoRenew defaultValues={{ autoRenew }} />
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 p-6">
        <p className="text-left text-secondary">Account on Hold</p>
        <ToggleOnHold defaultValues={{ onHold }} />
      </div>
    </section>
  );
};
