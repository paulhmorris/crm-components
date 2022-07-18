import { Dialog, Disclosure } from "@headlessui/react";
import { Button } from "components/Button";
import { DropdownMenu } from "components/DropdownMenu";
import { DropdownMenuItem } from "components/DropdownMenuItem";
import { ButtonSpinner } from "components/Loaders/ButtonSpinner";
import { EmptyModal } from "components/Modals/EmptyModal";
import { OrderPill } from "components/Orders/OrderPill";
import dayjs from "dayjs";
import { RightArrow } from "icons";
import { useState } from "react";
import { Form } from "react-final-form";
import { OrderPillStatus } from "types";
import { classNames, sleep } from "utils/helpers";
import orders from "../../mockData/orderData.json";

const getOrderStatus = ({
  orderId,
  isCancelled,
  isCancelledOrComplete,
}: {
  orderId: number;
  isCancelled: boolean;
  isCancelledOrComplete: boolean;
}): OrderPillStatus => {
  return isCancelled
    ? "canceled"
    : !orderId
    ? "request"
    : isCancelledOrComplete && !isCancelled
    ? "finished"
    : "active";
};

export const AccountOrderTracking = () => {
  const [requestModalIsOpen, setRequestModalIsOpen] = useState(false);
  async function requestOrder({
    orderType,
    lockerNumber,
  }: {
    orderType: string;
    lockerNumber: number;
  }) {
    await sleep(2000);
    setRequestModalIsOpen(false);
    console.log(orderType);
    console.log(lockerNumber);
    return;
  }

  return (
    <section className="flex w-full flex-col">
      <div className="flex items-end justify-between border-b border-gray-200 px-6 py-2">
        <h4>Order Tracking</h4>
        <Button
          variant="tertiary"
          className="-mb-2"
          onClick={() => setRequestModalIsOpen(true)}
        >
          + Order Request
        </Button>
      </div>
      {orders.map((order, key) => {
        const status = getOrderStatus(order);
        return (
          <Disclosure key={key}>
            {({ open }) => (
              <div
                className={classNames(
                  open && "z-10 shadow-border-t shadow-gray-400",
                  "transition-shadow duration-100"
                )}
              >
                <Disclosure.Button
                  as="div"
                  className={classNames(
                    "flex w-full cursor-pointer select-none items-center justify-between border-b border-gray-200 px-6 py-4 text-xs transition-colors duration-100 ",
                    open ? "bg-blue-ice" : "bg-white",
                    key % 2 !== 0 && "bg-gray-100"
                  )}
                >
                  <div className="flex flex-[0_1_40%] items-center space-x-2">
                    <span>
                      <RightArrow
                        className={classNames(
                          open && "rotate-90",
                          "h-3 w-3 transform text-blue-200"
                        )}
                      />
                    </span>
                    <div>
                      <OrderPill
                        pillType={
                          order.orderCardType === 2 ? "dryClean" : "washFold"
                        }
                        status={status}
                        text={
                          status === "active" || status === "finished"
                            ? `O-${order.orderId}`
                            : undefined
                        }
                      />
                    </div>
                    <p className="text-secondary">
                      {dayjs(order.promiseDateUtc).format("ddd M/D/YY")}
                    </p>
                  </div>
                  <div className="flex-[0_1_50%]">
                    <p className="font-bold">{order.statusText}</p>
                    <p className="text-secondary">{`${dayjs(
                      order.timeStampUtc
                    ).format("ddd M/D/YY")} at ${dayjs(
                      order.timeStampUtc
                    ).format("h:mma")} by ${order.personName}`}</p>
                  </div>
                  <DropdownMenu variant="icon" className="ml-auto">
                    <DropdownMenuItem>Add Order Note</DropdownMenuItem>
                  </DropdownMenu>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <div className="flex w-full cursor-pointer select-none items-center justify-between border-b border-gray-200 px-12 py-4 text-xs transition">
                    <div className="flex flex-[0_0_40%] items-center space-x-2">
                      <div>
                        <p className="font-bold">Dry Clean Order</p>
                        <p className="text-gray-300">OR-32710</p>
                      </div>
                    </div>
                    <div className="flex-[0_0_60%] leading-[18px]">
                      <p className="font-bold">{order.statusText}</p>
                      <p className="text-secondary">
                        Sun 6/7/20 at 7:36am
                        <br /> by Brendan Ring, System Administrator
                      </p>
                    </div>
                  </div>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        );
      })}
      <div className="mt-6 text-center">
        <Button variant="secondary">Load More Orders</Button>
      </div>

      {/* Order Request Modal */}
      <EmptyModal isOpen={requestModalIsOpen} setIsOpen={setRequestModalIsOpen}>
        <div>
          <header className="border-b border-gray-200 py-6 px-10">
            <Dialog.Title as="h2">Request an Order</Dialog.Title>
          </header>
          <div className="flex justify-between border-b border-gray-200 px-10 py-4">
            <p className="font-bold">Drop off Location</p>
            <p>Campus: Yoda Hoda</p>
          </div>
          <Form
            onSubmit={requestOrder}
            render={({ handleSubmit, submitting, invalid, pristine }) => (
              <form className="px-10 py-6" onSubmit={handleSubmit}>
                <div className="mb-6 flex items-center space-x-2"></div>
                <div className="flex items-center justify-end space-x-3 text-right">
                  <Button
                    disabled={submitting}
                    variant="secondary"
                    onClick={() => setRequestModalIsOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    disabled={submitting || invalid || pristine}
                    type="submit"
                    variant="primary"
                  >
                    {submitting ? "Requesting..." : "Request"}
                    {submitting && (
                      <span className="-mr-1 ml-2">
                        <ButtonSpinner />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            )}
          />
        </div>
      </EmptyModal>
    </section>
  );
};
