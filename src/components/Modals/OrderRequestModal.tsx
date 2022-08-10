import { Button } from "components/Button";
import { Select } from "components/Forms/Select";
import { SubmitButton } from "components/SubmitButton";
import { useForm } from "react-hook-form";
import { FormModalProps } from "types";
import { sleep } from "utils/helpers";
import { Modal } from "./Modal";
import { OrderRequestFormValues } from "./types";

export const OrderRequestModal = ({ isOpen, setIsOpen }: FormModalProps) => {
  const { control, handleSubmit, formState } = useForm<OrderRequestFormValues>({
    defaultValues: {
      orderType: "dryClean",
      lockerNumber: undefined,
    },
  });

  const { isSubmitting } = formState;

  async function requestOrder({
    orderType,
    lockerNumber,
  }: OrderRequestFormValues) {
    await sleep(2000);
    setIsOpen(false);
    console.log(orderType);
    console.log(lockerNumber);
    return;
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Request an Order">
      <div className="flex justify-between border-b border-gray-200 p-4">
        <p className="font-bold">Drop off Location</p>
        <p>Campus: Yoda Hoda</p>
      </div>
      <form className="pt-6" onSubmit={handleSubmit(requestOrder)}>
        <div className="mb-6 flex items-center space-x-4">
          <Select
            control={control}
            name="orderType"
            label="Order Type"
            options={[
              { value: "dryClean", label: "Dry Cleaning" },
              { value: "washFold", label: "Wash & Fold" },
            ]}
          />
          <Select
            control={control}
            name="lockerNumber"
            label="Locker Number"
            options={[
              { value: 1, label: "1" },
              { value: 2, label: "2" },
              { value: 3, label: "3" },
              { value: 4, label: "4" },
              { value: 5, label: "5" },
            ]}
          />
        </div>
        <div className="mt-4 flex items-center justify-end space-x-3 text-right">
          <Button
            disabled={formState.isSubmitting}
            variant="secondary"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
          <SubmitButton
            text="Request"
            submittingText="Requesting..."
            isSubmitting={isSubmitting}
          />
        </div>
      </form>
    </Modal>
  );
};
