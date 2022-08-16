import { Button } from "components/Button";
import { EditPersonalDetailsModal } from "components/Modals/EditPersonalDetailsModal";
import { generateRandomGuest } from "mockData";
import { useMemo, useState } from "react";
import { formatPhone } from "utils/helpers";
import { ToggleAutoRenew } from "./ToggleAutoRenew";
import { ToggleOnHold } from "./ToggleOnHold";

export const PersonalDetails = () => {
  const [openEditDetails, setOpenEditDetails] = useState(false);

  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    autoRenew,
    onHold,
    group,
  } = useMemo<ReturnType<typeof generateRandomGuest>>(
    () => generateRandomGuest(),
    []
  );

  return (
    <section className="flex w-full flex-col">
      <EditPersonalDetailsModal
        isOpen={openEditDetails}
        setIsOpen={setOpenEditDetails}
        defaultValues={{
          phone,
          email,
          firstName,
          lastName,
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
        <p className="text-left text-gray-secondary">Name</p>
        <p className="text-right font-bold">{`${firstName} ${lastName}`}</p>
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-100 p-6">
        <p className="text-left text-gray-secondary">Email</p>
        <p className="text-right font-bold lowercase">{email}</p>
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 p-6">
        <p className="text-left text-gray-secondary">Phone</p>
        <p className="text-right font-bold">{formatPhone(phone)}</p>
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-100 p-6">
        <p className="text-left text-gray-secondary">Home Address</p>
        <p className="text-right font-bold">{`${address.street} ${address.city}, ${address.zipCode}`}</p>
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 p-6">
        <p className="text-left text-gray-secondary">Group</p>
        {group ? (
          <a href="#" className="text-right">
            {group.name}
          </a>
        ) : (
          <p className="text-right font-bold">No Group</p>
        )}
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-100 p-6">
        <p className="text-left text-gray-secondary">
          Auto-Renew Academic Subscriptions
        </p>
        <ToggleAutoRenew defaultValues={{ autoRenew }} />
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 p-6">
        <p className="text-left text-gray-secondary">Account on Hold</p>
        <ToggleOnHold defaultValues={{ onHold }} />
      </div>
    </section>
  );
};
