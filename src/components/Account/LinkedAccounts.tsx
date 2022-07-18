import { Dialog } from "@headlessui/react";
import { Button } from "components/Button";
import { DropdownMenu } from "components/DropdownMenu";
import { DropdownMenuItem } from "components/DropdownMenuItem";
import { Select } from "components/Forms/Select";
import { TextInput } from "components/Forms/TextInput";
import { ButtonSpinner } from "components/Loaders/ButtonSpinner";
import { Modal } from "components/Modals/Modal";
import { mockLinkedAccounts } from "mockData";
import { useState } from "react";
import { Form } from "react-final-form";
import { formatPhone, sleep } from "utils/helpers";
import { required } from "utils/inputValidations";

export const LinkedAccounts = ({
  linkedAccounts,
}: {
  linkedAccounts: typeof mockLinkedAccounts;
}) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchedGuest, setSearchedGuest] = useState({
    name: "",
    phone: "",
    email: "",
  });

  async function saveDetails() {
    await sleep(2000);
    console.log("Saved details");
    setShowAddModal(false);
    await sleep(75);
    return;
  }

  async function handleUrlSearch() {
    console.log("handleUrlSearch()");
    // Fake api response
    setSearchedGuest({
      name: "Jefferson Pierce",
      phone: "4322668901",
      email: "jeff@gmail.com",
    });
  }

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

      <Modal isOpen={showAddModal} setIsOpen={setShowAddModal}>
        <div>
          <header className="border-b border-gray-200 pb-6">
            <Dialog.Title as="h2">Add Linked Account</Dialog.Title>
          </header>
          <Dialog.Description className="py-10 pb-3 text-secondary">
            To link an account to this profile, paste the URL of the guest you
            want to link in the field below.
          </Dialog.Description>
          <Form
            onSubmit={saveDetails}
            mutators={{
              setName: (_, state, utils) => {
                utils.changeValue(state, "name", () => searchedGuest.name);
              },
              setEmail: (_, state, utils) => {
                utils.changeValue(state, "email", () => searchedGuest.email);
              },
              setPhone: (_, state, utils) => {
                utils.changeValue(state, "phone", () => searchedGuest.phone);
              },
            }}
            render={({ form, handleSubmit, submitting, invalid }) => (
              <form onSubmit={handleSubmit}>
                <div className="mb-6 space-y-1">
                  <TextInput
                    name="guestProfileUrl"
                    label="Guest Profile Url"
                    className="text-blue-200"
                    required
                    onPaste={async () => {
                      await handleUrlSearch();
                      form.mutators.setName();
                      form.mutators.setEmail();
                      form.mutators.setPhone();
                    }}
                  />
                  <TextInput
                    name="name"
                    label="Name"
                    disabled
                    required
                    fieldProps={{ validate: required }}
                  />
                  <TextInput
                    name="phone"
                    type="tel"
                    label="Phone Number"
                    fieldProps={{
                      format: formatPhone,
                      validate: required,
                    }}
                    disabled
                    required
                  />
                  <TextInput
                    name="email"
                    label="Email"
                    disabled
                    required
                    fieldProps={{ validate: required }}
                  />
                  <Select
                    name="relationshipType"
                    label="Relationship Type"
                    fieldProps={{ validate: required }}
                    options={[
                      { value: "parent", label: "Parent" },
                      { value: "Guardian", label: "Guardian" },
                      { value: "Student", label: "Student" },
                    ]}
                  />
                </div>
                <div className="flex items-center justify-end space-x-3 text-right">
                  <Button
                    disabled={submitting}
                    variant="secondary"
                    onClick={() => setShowAddModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    disabled={submitting || invalid}
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
      </Modal>
    </>
  );
};
