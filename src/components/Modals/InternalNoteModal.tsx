import { Button } from "components/Button";
import { TextArea } from "components/Forms/TextArea";
import { SubmitButton } from "components/SubmitButton";
import { useForm } from "react-hook-form";
import { FormModalProps } from "types";
import { sleep } from "utils/helpers";
import { Modal } from "./Modal";
import { InternalNoteFormValues } from "./types";

export const InternalNoteModal = ({ isOpen, setIsOpen }: FormModalProps) => {
  const { control, handleSubmit, formState } =
    useForm<InternalNoteFormValues>();
  const { isSubmitting } = formState;

  async function saveNote(data: InternalNoteFormValues) {
    await sleep(2000);
    console.log(data);
    setIsOpen(false);
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="👤 Edit Guest Note">
      <form onSubmit={handleSubmit(saveNote)} className="pt-6">
        <p className="mb-1">✅ Only employees can read this note.</p>
        <div className="mb-2">
          <TextArea
            control={control}
            name="internalNote"
            label="Internal Note"
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
