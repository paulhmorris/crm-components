import { Button } from "components/Button";
import { TextArea } from "components/Forms/TextArea";
import { SubmitButton } from "components/SubmitButton";
import { useForm } from "react-hook-form";
import { GenericModalProps } from "types";
import { modalFormConfig } from "utils/config";
import { sleep } from "utils/helpers";
import { Modal } from "./Modal";
import { InternalNoteFormValues } from "./types";

export const InternalNoteModal = ({ isOpen, setIsOpen }: GenericModalProps) => {
  const { control, handleSubmit, formState } = useForm<InternalNoteFormValues>({
    ...modalFormConfig,
  });
  const { isSubmitting } = formState;

  async function saveNote(data: InternalNoteFormValues) {
    await sleep(2000);
    console.log(data);
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="🔒 Edit Internal Note"
      description="Only employees can read this note."
    >
      <form onSubmit={handleSubmit(saveNote)} className="pt-6">
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
