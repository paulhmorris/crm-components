import { Button } from "components/Button";
import { TextInput } from "components/Forms/TextInput";
import { SubmitButton } from "components/SubmitButton";
import { useForm } from "react-hook-form";
import { FormModalProps } from "types";
import { modalFormConfig } from "utils/config";
import { sleep } from "utils/helpers";
import { Modal } from "./Modal";
import { ActivateBagFormValues } from "./types";

export const BagActivationModal = ({
  isOpen,
  setIsOpen,
  defaultValues,
}: FormModalProps) => {
  const { control, handleSubmit, formState } = useForm<ActivateBagFormValues>({
    defaultValues,
    ...modalFormConfig,
  });
  const { isSubmitting } = formState;

  async function activateBag(data: ActivateBagFormValues) {
    await sleep(2000);
    console.log(data);
    setIsOpen(false);
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Activate Bag">
      <form onSubmit={handleSubmit(activateBag)} className="mt-4">
        <TextInput control={control} label="Barcode" name="barcode" required />
        <div className="mt-4 flex items-center justify-end space-x-3 text-right">
          <Button
            disabled={isSubmitting}
            variant="secondary"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
          <SubmitButton
            text="Activate"
            submittingText="Activating..."
            isSubmitting={isSubmitting}
          />
        </div>
      </form>
    </Modal>
  );
};
