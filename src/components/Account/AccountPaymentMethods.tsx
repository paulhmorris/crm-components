import { Button } from "components/Button";
import { DropdownMenu } from "components/DropdownMenu";
import { DropdownMenuItem } from "components/DropdownMenuItem";
import { DefaultTag } from "components/Tags";
import dayjs from "dayjs";
import { CardVisa } from "icons";
import { useState } from "react";

export const mockPaymentMethods = [
  {
    id: 1,
    cardType: "visa",
    lastFour: "1111",
    expiration: new Date(2024, 10, 20).toISOString(),
    isDefault: true,
    paymentProcessors: ["Clearent"],
  },
  {
    id: 2,
    cardType: "mastercard",
    lastFour: "1234",
    expiration: new Date(2024, 10, 20).toISOString(),
    isDefault: false,
    paymentProcessors: ["Clearent", "Worldpay"],
  },
  {
    id: 3,
    cardType: "visa",
    lastFour: "7890",
    expiration: new Date(2024, 10, 20).toISOString(),
    isDefault: false,
    paymentProcessors: ["Clearent"],
  },
];

export const AccountPaymentMethods = () => {
  const [openAddCard, setOpenAddCard] = useState(false);

  return (
    <>
      <section className="flex w-full flex-col">
        <div className="flex items-end justify-between border-b border-gray-200 px-6 py-3">
          <h4>Payment Methods</h4>
          <Button
            onClick={() => setOpenAddCard(true)}
            variant="tertiary"
            className="-mb-2"
          >
            + Credit Card
            <span className="sr-only">Add Credit Card</span>
          </Button>
        </div>
        {mockPaymentMethods.map((method) => (
          <div
            key={method.id}
            className="flex items-center border-b border-gray-200 px-6 py-3 text-xs"
          >
            <div className="flex space-x-4">
              <div className="flex items-start">
                <CardVisa className="h-10 w-10" />
              </div>
              <div className="flex flex-col items-start justify-start font-bold">
                <p>Ending in {method.lastFour}</p>
                <p>Exp {dayjs(method.expiration).format("MM/YYYY")}</p>
                <p className="font-normal">
                  {method.paymentProcessors.join(", ")}
                </p>
              </div>
              {method.isDefault && (
                <div className="flex items-start">
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
