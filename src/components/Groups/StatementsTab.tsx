import { Disclosure } from "@headlessui/react";
import { Button } from "components/Button";
import dayjs from "dayjs";
import { classNames, formatCurrency } from "utils/helpers";
import { RightArrow } from "../../icons/index";
import { statements, transactions } from "./statements";

export const StatementsTab = () => {
  return (
    <section>
      <h4 className="border-b border-gray-200 px-6 py-3 text-base">
        Statements
      </h4>
      {statements.map((statement, key) => {
        return (
          <Disclosure key={key}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  as="div"
                  className={classNames(
                    "flex w-full cursor-pointer items-center justify-between border-b border-gray-200 px-6 py-3 transition",
                    key % 2 !== 0 && "bg-gray-100",
                    open &&
                      "bg-blue-ice shadow-border-t-2 shadow-gray-secondary"
                  )}
                >
                  <div className="flex flex-row items-center space-x-2">
                    <RightArrow
                      className={classNames(
                        open && "rotate-90 transform",
                        "h-3 w-3 text-blue-200"
                      )}
                    />
                    <Button
                      variant="tertiary"
                      className="text-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("View Invoice");
                      }}
                    >
                      View {dayjs(statement.date).format("MM/DD/YYYY")} Invoice
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Record Payment");
                      }}
                    >
                      Record Payment
                    </Button>
                  </div>
                  <p className="text-xs font-bold">
                    Balance Due {formatCurrency(statement.balance)}
                  </p>
                </Disclosure.Button>
                <Disclosure.Panel>
                  {transactions
                    .filter(
                      (transaction) => transaction.statementId === statement.id
                    )
                    .map((transaction, key) => {
                      return (
                        <div
                          className="flex w-full cursor-pointer items-center justify-between border-b border-gray-200 px-6 py-5 text-xs"
                          key={key}
                        >
                          <div className="flex flex-col">
                            <p className="font-bold text-blue-200">
                              {transaction.name}
                            </p>
                            <p className="text-gray-secondary">
                              {dayjs(transaction.date).format("MM/DD/YYYY")} •
                              No payment activity
                            </p>
                          </div>
                          <p className="self-start font-bold text-error">
                            Unpaid {formatCurrency(transaction.balance)}
                          </p>
                        </div>
                      );
                    })}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        );
      })}
    </section>
  );
};
