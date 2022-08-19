import { Button } from "components/Button";
import { TextInput } from "components/Forms/TextInput";
import { SubmitButton } from "components/SubmitButton";
import { useForm } from "react-hook-form";
import { GenericModalProps } from "types";
import { modalFormConfig } from "utils/config";
import { sleep } from "utils/helpers";
import { Modal } from "./Modal";
import { PersonalDetailsFormValues } from "./types";

export const EditPersonalDetailsModal = ({
  isOpen,
  setIsOpen,
}: GenericModalProps) => {
  const { control, handleSubmit, formState } =
    useForm<PersonalDetailsFormValues>({
      defaultValues: { email: "", firstName: "", lastName: "", phone: "" },
      ...modalFormConfig,
    });
  const { isSubmitting } = formState;

  async function saveDetails(data: PersonalDetailsFormValues) {
    await sleep(2000);
    console.log("Saved details: ", data);
    setIsOpen(false);
    await sleep(200);
    return;
  }

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Change Personal Details"
    >
      <form onSubmit={handleSubmit(saveDetails)} className="pt-6">
        <div className="mb-6 space-y-1">
          <TextInput
            control={control}
            name="firstName"
            label="First Name"
            required
          />
          <TextInput
            control={control}
            name="lastName"
            label="Last Name"
            required
          />
          <TextInput control={control} name="email" label="Email" required />
          <TextInput
            control={control}
            name="phone"
            label="Phone"
            type="tel"
            required
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
