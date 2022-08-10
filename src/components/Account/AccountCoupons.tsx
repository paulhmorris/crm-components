import { Button } from "components/Button";
import { DropdownMenu } from "components/DropdownMenu";
import { DropdownMenuItem } from "components/DropdownMenuItem";
import { AddCouponModal } from "components/Modals/AddCouponModal";
import { CouponTag } from "components/Tags";
import { mockAccountCoupons } from "mockData";
import { useState } from "react";

export const AccountCoupons = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="flex w-full flex-col">
      <AddCouponModal isOpen={openModal} setIsOpen={setOpenModal} />
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
  );
};
