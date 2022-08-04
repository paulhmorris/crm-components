import { Dialog } from "@headlessui/react";
import { Button } from "components/Button";
import { DropdownMenu } from "components/DropdownMenu";
import { DropdownMenuItem } from "components/DropdownMenuItem";
import { Select } from "components/Forms/Select";
import { Modal } from "components/Modals/Modal";
import { SubmitButton } from "components/SubmitButton";
import { CouponTag } from "components/Tags";
import { mockAccountCoupons } from "mockData";
import { useEffect, useState } from "react";
import { Form } from "react-final-form";
import { SelectOptionProps } from "types";
import { convertArrayToSelectOptions, sleep } from "utils/helpers";
import { required } from "utils/inputValidations";

export const AccountCoupons = () => {
  const [openModal, setOpenModal] = useState(false);
  const [couponSelectOptions, setCouponSelectOptions] = useState<
    SelectOptionProps[]
  >([]);

  async function addCoupon() {
    await sleep(1500);
    setOpenModal(false);
  }

  useEffect(() => {
    setCouponSelectOptions(
      convertArrayToSelectOptions(mockAccountCoupons, "id", "code")
    );
  }, []);

  return (
    <>
      <section className="flex w-full flex-col">
        <div className="flex items-end justify-between border-b border-gray-200 px-6 py-3 ">
          <h4>Coupon Bank</h4>
          <Button
            variant="tertiary"
            className="-mb-2"
            onClick={() => setOpenModal(true)}
          >
            + Coupon
            <span className="sr-only">Add Coupon</span>
          </Button>
        </div>
        {mockAccountCoupons.map((coupon) => (
          <div
            key={coupon.id}
            className="flex items-center border-b border-gray-200 px-6 py-4 text-xs"
          >
            <div className="flex-1">
              <CouponTag text={coupon.code} />
            </div>
            <div className="flex-1">
              <p className="font-bold">{coupon.code}</p>
              <p>{coupon.description}</p>
            </div>
            <div className="ml-auto">
              <DropdownMenu variant="kebab">
                <DropdownMenuItem>Remove Coupon</DropdownMenuItem>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </section>
      {/* Bag Activation Modal */}
      <Modal isOpen={openModal} setIsOpen={setOpenModal}>
        <div>
          <header className="border-b border-gray-200 pb-6">
            <Dialog.Title as="h2">Add Coupon</Dialog.Title>
          </header>
          <Form
            onSubmit={addCoupon}
            defaultValues={{ orderType: "dryClean" }}
            render={({ handleSubmit, submitting }) => (
              <form onSubmit={handleSubmit} className="mt-4">
                <Select
                  label="Add a coupon"
                  name="coupon"
                  fieldProps={{ validate: required }}
                  options={couponSelectOptions}
                />
                <div className="mt-4 flex items-center justify-end space-x-3 text-right">
                  <Button
                    disabled={submitting}
                    variant="secondary"
                    onClick={() => setOpenModal(false)}
                  >
                    Cancel
                  </Button>
                  <SubmitButton text="Save" submittingText="Saving..." />
                </div>
              </form>
            )}
          />
        </div>
      </Modal>
    </>
  );
};
