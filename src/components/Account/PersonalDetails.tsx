import { Dialog } from "@headlessui/react";
import { Button } from "components/Button";
import { TextInput } from "components/Forms/TextInput";
import { Toggle } from "components/Forms/Toggle";
import { ButtonSpinner } from "components/Loaders/ButtonSpinner";
import { EmptyModal } from "components/Modals/EmptyModal";
import formatStringByPattern from "format-string-by-pattern";
import { useState } from "react";
import { Form } from "react-final-form";
import { PersonalDetailsProps } from "types";
import { sleep } from "utils/helpers";
import { required } from "utils/inputValidations";
import { phoneMask } from "utils/masks";

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

  async function saveDetails() {
    await sleep(2000);
    console.log("Saved details");
    setOpenEditDetails(false);
    await sleep(75);
    return;
  }

  return (
    <>
      <section className="flex w-full flex-col">
        <div className="flex items-end justify-between px-6 py-3">
          <h4>Personal Details</h4>
          <Button
            onClick={() => setOpenEditDetails(true)}
            variant="tertiary"
            className="-mb-2"
          >
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
      <EmptyModal isOpen={openEditDetails} setIsOpen={setOpenEditDetails}>
        <div>
          <header className="border-b border-gray-200 p-6">
            <Dialog.Title as="h2">Change Personal Details</Dialog.Title>
          </header>
          <Form
            onSubmit={saveDetails}
            initialValues={{
              phone,
              email,
              firstName: "Johnny",
              lastName: "Rocket",
            }}
            render={({
              handleSubmit,
              submitting,
              pristine,
              validating,
              invalid,
            }) => (
              <form onSubmit={handleSubmit} className="p-6">
                <div className="mb-6 space-y-1">
                  <TextInput
                    name="firstName"
                    label="First Name"
                    fieldProps={{ validate: required }}
                    required
                  />
                  <TextInput
                    name="lastName"
                    label="Last Name"
                    fieldProps={{ validate: required }}
                    required
                  />
                  <TextInput
                    name="email"
                    label="Email"
                    fieldProps={{ validate: required }}
                    required
                  />
                  <TextInput
                    name="phone"
                    label="Phone"
                    type="tel"
                    fieldProps={{
                      validate: required,
                      format: (v) => formatStringByPattern(phoneMask, v),
                    }}
                    required
                  />
                </div>
                <div className="flex items-center justify-end space-x-3 text-right">
                  <Button
                    disabled={submitting}
                    variant="secondary"
                    onClick={() => setOpenEditDetails(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    disabled={submitting || pristine || validating || invalid}
                    type="submit"
                    variant="primary"
                  >
                    {submitting ? "Saving..." : "Save"}
                    {submitting && (
                      <span className="-mr-1 ml-2">
                        <ButtonSpinner />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            )}
          />
        </div>
      </EmptyModal>
    </>
  );
};
