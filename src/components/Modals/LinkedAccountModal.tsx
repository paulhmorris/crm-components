import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormModalProps } from "types";
import { sleep } from "utils/helpers";

export const LinkedAccountModal = ({ isOpen, setIsOpen }: FormModalProps) => {
  const { control, handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;
  const [searchedGuest, setSearchedGuest] = useState({
    name: "",
    phone: "",
    email: "",
  });

  async function saveDetails() {
    await sleep(2000);
    console.log("Saved details");
    setIsOpen(false);
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

  return (
    <div></div>
    /* <Modal
          isOpen={showAddModal}
          setIsOpen={setShowAddModal}
          title="Add Linked Account"
        >
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
            render={({ form, handleSubmit, submitting }) => (
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
                    disabled={submitting}
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
                  <SubmitButton text="Save" submittingText="Saving..." />
                </div>
              </form>
            )}
          />
        </Modal> */
  );
};
