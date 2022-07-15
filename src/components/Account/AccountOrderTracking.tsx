import { Disclosure, Menu } from "@headlessui/react";
import { Button } from "components/Button";
import { DropdownMenu } from "components/DropdownMenu";
import { OrderPill } from "components/Orders/OrderPill";
import dayjs from "dayjs";
import { RightArrow } from "icons";
import { OrderPillStatus } from "types";
import { classNames } from "utils/helpers";
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
  return (
    <section className="flex w-full flex-col">
      <div className="flex items-end justify-between border-b border-gray-200 px-6 py-2">
        <h4>Order Tracking</h4>
        <Button variant="tertiary" className="-mb-2">
          + Order Request
        </Button>
      </div>
      {orders.map((order, key) => {
        const status = getOrderStatus(order);
        return (
          <Disclosure key={key}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  as="div"
                  className={classNames(
                    "flex w-full cursor-pointer select-none items-center justify-between border-b border-gray-200 px-6 py-4 text-xs transition",
                    key % 2 !== 0 && "bg-gray-100",
                    open && "bg-blue-ice shadow-border-t shadow-gray-400"
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
                  <DropdownMenu
                    variant="icon"
                    className=" ml-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={classNames(
                            active && "bg-gray-200",
                            "group flex w-full items-center px-4"
                          )}
                          onClick={() =>
                            console.log(`Add order note for O-${order.orderId}`)
                          }
                        >
                          Add Order Note
                        </button>
                      )}
                    </Menu.Item>
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
              </>
            )}
          </Disclosure>
        );
      })}
    </section>
  );
};
