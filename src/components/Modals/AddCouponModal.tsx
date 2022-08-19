import { Button } from "components/Button";
import { Select } from "components/Forms/Select";
import { SubmitButton } from "components/SubmitButton";
import { mockAccountCoupons } from "mockData";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GenericModalProps, SelectOptionProps } from "types";
import { convertArrayToSelectOptions, sleep } from "utils/helpers";
import { Modal } from "./Modal";
import { AddCouponFormValues } from "./types";

export const AddCouponModal = ({ isOpen, setIsOpen }: GenericModalProps) => {
  const { control, handleSubmit, formState } = useForm<AddCouponFormValues>({
    defaultValues: { coupon: "" },
  });
  const { isSubmitting } = formState;

  const [couponSelectOptions, setCouponSelectOptions] = useState<
    SelectOptionProps[]
  >([]);

  useEffect(() => {
    setCouponSelectOptions(
      convertArrayToSelectOptions(mockAccountCoupons, "id", "code")
    );
  }, []);

  async function addCoupon(data: AddCouponFormValues) {
    await sleep(1500);
    console.log(data);
    setIsOpen(false);
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Coupon">
      <form onSubmit={handleSubmit(addCoupon)} className="mt-4">
        <Select
          control={control}
          label="Add a coupon"
          name="coupon"
          options={couponSelectOptions}
        />
        <div className="mt-4 flex items-center justify-end space-x-3 text-right">
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
