import { Button } from "components/Button";
import { TextArea } from "components/Forms/TextArea";
import { SubmitButton } from "components/SubmitButton";
import { useForm } from "react-hook-form";
import { GenericModalProps } from "types";
import { modalFormConfig } from "utils/config";
import { sleep } from "utils/helpers";
import { Modal } from "./Modal";
import { GuestNoteFormValues } from "./types";

export const GuestNoteModal = ({ isOpen, setIsOpen }: GenericModalProps) => {
  const { control, handleSubmit, formState } = useForm<GuestNoteFormValues>({
    ...modalFormConfig,
  });
  const { isSubmitting, errors } = formState;

  async function saveNote(values: GuestNoteFormValues) {
    await sleep(2000);
    console.log(values);
    console.log(errors);
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="👤 Edit Guest Note"
      description="⛔️ You are editing a note the guest can see."
    >
      <form onSubmit={handleSubmit(saveNote)} className="pt-6">
        <div className="mb-2">
          <TextArea control={control} name="guestNote" label="Guest Note" />
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
