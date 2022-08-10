import { Button } from "components/Button";
import { TextArea } from "components/Forms/TextArea";
import { SubmitButton } from "components/SubmitButton";
import { useForm } from "react-hook-form";
import { FormModalProps } from "types";
import { sleep } from "utils/helpers";
import { Modal } from "./Modal";
import { GuestNoteFormValues } from "./types";

export const GuestNoteModal = ({ isOpen, setIsOpen }: FormModalProps) => {
  const { control, handleSubmit, formState } = useForm<GuestNoteFormValues>();
  const { isSubmitting } = formState;

  async function saveNote(values: GuestNoteFormValues) {
    await sleep(2000);
    console.log(values);
    setIsOpen(false);
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="👤 Edit Guest Note">
      <form onSubmit={handleSubmit(saveNote)} className="pt-6">
        <p className="mb-1">⛔️ You are editing a note the guest can see.</p>
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
