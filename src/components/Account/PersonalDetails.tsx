import { Button } from "components/Button";
import { Toggle } from "components/Forms/Toggle";
import formatStringByPattern from "format-string-by-pattern";
import { Form } from "react-final-form";
import { PersonalDetailsProps } from "types";

export const PersonalDetails = ({
  fullName,
  email,
  phone,
  address,
  group,
  autoRenew,
  onHold,
}: PersonalDetailsProps) => {
  return (
    <section className="flex w-full flex-col">
      <div className="p flex items-end justify-between px-6 py-3">
        <h4>Personal Details</h4>
        <Button variant="tertiary" className="-mb-2">
          Edit
        </Button>
      </div>
      <div className="flex items-center justify-between border-b border-t border-gray-200 p-6">
        <p className="text-left text-secondary">Name</p>
        <p className="text-right font-bold">{fullName}</p>
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-100 p-6">
        <p className="text-left text-secondary">Email</p>
        <p className="text-right font-bold">{email}</p>
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 p-6">
        <p className="text-left text-secondary">Phone</p>
        <p className="text-right font-bold">
          {formatStringByPattern("(000) 000-0000", phone)}
        </p>
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
        <Form
          onSubmit={() => console.log("autoRenew toggled")}
          initialValues={{ autoRenew }}
          className="ml-auto"
          render={() => <Toggle name="autoRenew" />}
        />
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 p-6">
        <p className="text-left text-secondary">Account on Hold</p>
        <Form
          onSubmit={() => console.log("onHold toggled")}
          initialValues={{ onHold }}
          className="ml-auto"
          render={() => <Toggle name="onHold" />}
        />
      </div>
    </section>
  );
};
