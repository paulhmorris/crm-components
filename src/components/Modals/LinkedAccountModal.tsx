import { Dialog } from "@headlessui/react";
import { Button } from "components/Button";
import { Select } from "components/Forms/Select";
import { TextInput } from "components/Forms/TextInput";
import { SubmitButton } from "components/SubmitButton";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormModalProps } from "types";
import { modalFormConfig } from "utils/config";
import { sleep } from "utils/helpers";
import { Modal } from "./Modal";
import { LinkdAccountFormValues } from "./types";

export const LinkedAccountModal = ({ isOpen, setIsOpen }: FormModalProps) => {
  const { control, handleSubmit, formState, setValue } =
    useForm<LinkdAccountFormValues>({ ...modalFormConfig });
  const { isSubmitting } = formState;
  const [searchedGuest, setSearchedGuest] = useState({
    name: "",
    phone: "",
    email: "",
  });

  async function saveDetails(data: LinkdAccountFormValues) {
    await sleep(2000);
    console.log("Saved details", data);
    setIsOpen(false);
    await sleep(75);
    return;
  }

  async function handleUrlSearch() {
    // Fake api response
    setSearchedGuest({
      name: "Jefferson Pierce",
      phone: "4322668901",
      email: "jeff@gmail.com",
    });
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Linked Account">
      <Dialog.Description className="py-10 pb-3 text-secondary">
        To link an account to this profile, paste the URL of the guest you want
        to link in the field below.
      </Dialog.Description>
      <form onSubmit={handleSubmit(saveDetails)}>
        <div className="mb-6 space-y-1">
          <TextInput
            control={control}
            name="guestProfileUrl"
            label="Guest Profile Url"
            className="text-blue-200"
            required
            onPaste={async () => {
              await handleUrlSearch();
              setValue("name", searchedGuest.name);
              setValue("phone", searchedGuest.phone);
              setValue("email", searchedGuest.email);
            }}
          />
          <TextInput
            control={control}
            name="name"
            label="Name"
            disabled
            required
          />
          <TextInput
            control={control}
            name="phone"
            type="tel"
            label="Phone Number"
            disabled
            required
          />
          <TextInput
            control={control}
            name="email"
            label="Email"
            disabled
            required
          />
          <Select
            control={control}
            name="relationshipType"
            label="Relationship Type"
            disabled={isSubmitting}
            options={[
              { value: "parent", label: "Parent" },
              { value: "Guardian", label: "Guardian" },
              { value: "Student", label: "Student" },
            ]}
          />
        </div>
        <div className="flex items-center justify-end space-x-3 text-right">
          <Button
            disabled={isSubmitting}
            variant="secondary"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
          <SubmitButton
            text="Save"
            submittingText="Saving..."
            isSubmitting={isSubmitting}
          />
        </div>
      </form>
    </Modal>
  );
};
