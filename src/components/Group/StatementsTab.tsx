import { Disclosure } from "@headlessui/react";
import { Button } from "components/Button";
import dayjs from "dayjs";
import { classNames } from "utils/helpers";
import { RightArrow } from "../../icons/index";
import GridRow from "./GridRow";
import { statements, transactions } from "./statements";

export const StatementsTab = () => {
  return (
    <section className="striped">
      <div className="border-[1px] border-gray-200 py-4">
        <p className="pl-6 text-base">Statements</p>
      </div>
      {statements.map((statement, key) => {
        return (
          <Disclosure key={key}>
            {({ open }) => (
              <>
                <GridRow className="grid-row striped-child">
                  <>
                    <div className="flex flex-row items-center">
                      <Disclosure.Button className="mr-1">
                        <RightArrow
                          className={classNames(
                            open && "rotate-90 transform",
                            "h-3 w-3 text-blue-200"
                          )}
                        />
                      </Disclosure.Button>
                      <p className="cursor-pointer font-bold text-blue-200 underline">
                        View {dayjs(statement.date).format("MM/DD/YYYY")}{" "}
                        Invoice
                      </p>
                      <Button variant="secondary" className="ml-3">
                        Record Payment
                      </Button>
                    </div>
                    <p className="">Balance Due ${statement.balance}</p>
                  </>
                </GridRow>
                <Disclosure.Panel className="striped">
                  {transactions
                    .filter(
                      (transaction) => transaction.statementId === statement.id
                    )
                    .map((transaction, key) => {
                      return (
                        <GridRow className="grid-row cursor-pointer" key={key}>
                          <>
                            <div className="flex flex-col">
                              <p className="font-bold text-blue-200">
                                {transaction.name}
                              </p>
                              <p>
                                {dayjs(transaction.date).format("MM/DD/YYYY")} •
                                No payment activity
                              </p>
                            </div>
                            <p className="text-error">
                              Unpaid ${transaction.balance}
                            </p>
                          </>
                        </GridRow>
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
