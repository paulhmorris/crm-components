import { Button } from "components/Button";
import { DropdownMenu } from "components/DropdownMenu";
import { DropdownMenuItem } from "components/DropdownMenuItem";
import { DefaultTag } from "components/Tags";
import dayjs from "dayjs";
import { AutopayIcon, CardVisa } from "icons";
import { mockPaymentMethods } from "mockData";

export const AccountPaymentMethods = () => {
  return (
    <>
      <section className="flex w-full flex-col">
        <div className="flex items-end justify-between border-b border-gray-200 px-6 py-3">
          <h4>Payment Methods</h4>
          <Button variant="tertiary" className="-mb-2 -mr-2">
            + Credit Card
            <span className="sr-only">Add Credit Card</span>
          </Button>
        </div>
        {mockPaymentMethods.map((method) => (
          <div
            key={method.id}
            className="flex items-center border-b border-gray-200 px-6 py-3 text-xs"
          >
            <div className="flex">
              <div className="mr-4 flex items-start">
                <CardVisa className="h-6 w-10" />
              </div>
              <div className="mr-2 flex flex-col items-start justify-start font-bold leading-4.5">
                <p>Ending in {method.lastFour}</p>
                <p>Exp {dayjs(method.expiration).format("MM/YYYY")}</p>
                <p>Zip {method.zipCode}</p>
                <p className="font-normal italic text-gray-secondary">
                  {method.paymentProcessors.join(", ")}
                </p>
                {method.isAutoPay !== null && (
                  <p className="mt-2 flex items-center font-normal">
                    <AutopayIcon className="mr-0.5 -mt-0.5 h-4 w-4" />
                    <span>Autopay:&nbsp;</span>
                    <span className={`${!method.isAutoPay && "text-error"}`}>
                      {method.isAutoPay ? "On" : "Off"}
                    </span>
                  </p>
                )}
              </div>
              {method.isDefault && (
                <div>
                  <DefaultTag />
                </div>
              )}
            </div>
            <div className="ml-auto">
              <DropdownMenu variant="kebab">
                <DropdownMenuItem>Remove Credit Card</DropdownMenuItem>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
