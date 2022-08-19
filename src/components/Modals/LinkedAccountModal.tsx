import { Button } from "components/Button";
import { Select } from "components/Forms/Select";
import { TextInput } from "components/Forms/TextInput";
import { SubmitButton } from "components/SubmitButton";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GenericModalProps } from "types";
import { modalFormConfig } from "utils/config";
import { sleep } from "utils/helpers";
import { Modal } from "./Modal";
import { LinkedAccountFormValues } from "./types";

export const LinkedAccountModal = ({
  isOpen,
  setIsOpen,
}: GenericModalProps) => {
  const { control, handleSubmit, formState, setValue } =
    useForm<LinkedAccountFormValues>({
      ...modalFormConfig,
      defaultValues: {
        guestProfileUrl: "",
        name: "",
        phone: "",
        email: "",
        relationshipType: "student",
      },
    });
  const { isSubmitting } = formState;
  const [searchedGuest, setSearchedGuest] = useState({
    name: "",
    phone: "",
    email: "",
  });

  async function saveDetails(data: LinkedAccountFormValues) {
    await sleep(2000);
    console.log("Saved details", data);
    setIsOpen(false);
    await sleep(75);
    return;
  }

  async function handleUrlSearch() {
    // Fake api response
    return new Promise((resolve) => {
      setSearchedGuest({
        name: "Jefferson Pierce",
        phone: "(432) 266-8901",
        email: "jeff@gmail.com",
      });
      resolve(true);
    });
  }

  useEffect(() => {
    setValue("name", searchedGuest.name, { shouldDirty: true });
    setValue("phone", searchedGuest.phone, { shouldDirty: true });
    setValue("email", searchedGuest.email, { shouldDirty: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedGuest]);

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Add Linked Account"
      description="To link an account to this profile, paste the URL of the guest you want
    to link in the field below."
    >
      <form onSubmit={handleSubmit(saveDetails)} className="mt-6">
        <div className="mb-6 space-y-1">
          <TextInput
            control={control}
            name="guestProfileUrl"
            label="Guest Profile Url"
            className="text-blue-primary"
            required
            onPaste={async () => {
              await handleUrlSearch();
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
              { value: "guardian", label: "Guardian" },
              { value: "student", label: "Student" },
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
