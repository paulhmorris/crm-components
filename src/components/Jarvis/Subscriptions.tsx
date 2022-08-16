import {
  rand,
  randFutureDate,
  randNumber,
  randPastDate,
  randText,
  randUuid,
} from "@ngneat/falso";
import { SearchBox } from "components/SearchBox";
import { Table, TableCell, TableRow } from "components/Table";
import dayjs from "dayjs";
import { useMemo, useState } from "react";
import { formatCurrency } from "utils/helpers";

type mockTableRow = {
  id: string;
  name: string;
  start: Date;
  end: Date;
  billingPeriod: string;
  price: number;
  poundsPerCycle: number;
  cycleLength: string;
  submarket: {
    id: string;
    name: string;
  };
};

const headers = [
  "name",
  "service dates",
  "billing period",
  "price",
  "pounds per cycle",
  "submarket",
];
export const Subscriptions = () => {
  const x = true;
  const data = useMemo(() => {
    const arr: mockTableRow[] = [];
    for (let i = 0; i < 50; i++) {
      arr.push({
        id: randUuid(),
        name: randText({ charCount: 20 }),
        start: randPastDate(),
        end: randFutureDate(),
        billingPeriod: rand(["Semester", "Annual", "Monthly"]),
        price: randNumber({ min: 129, max: 899, precision: 100 }),
        poundsPerCycle: randNumber({ min: 10, max: 100 }),
        cycleLength: "week",
        submarket: {
          id: randUuid(),
          name: randText({ charCount: 25 }),
        },
      });
    }
    return arr;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [x]);

  const [filter, setFilter] = useState("");
  const filteredSubscriptions =
    filter === ""
      ? data
      : data &&
        data.filter((sub) => {
          return (
            sub.name.toLowerCase().includes(filter.toLowerCase()) ||
            sub.submarket.name.toLowerCase().includes(filter.toLowerCase())
          );
        });

  if (!filteredSubscriptions) return null;

  return (
    <>
      <div className="max-w-md p-6">
        <SearchBox
          onChange={({ target }) => setFilter(target.value)}
          placeholder="Filter by name or submarket"
        />
      </div>
      <Table headers={headers}>
        {filteredSubscriptions
          .sort((a, b) => +a.start - +b.start)
          .map((row) => (
            <TableRow
              key={row.id}
              onClick={() =>
                console.log(`Navigating to subscriptions/${row.id}`)
              }
              className="cursor-pointer"
            >
              <TableCell>
                <a className="inline-block font-bold" href="#">
                  {row.name}
                </a>
              </TableCell>
              <TableCell>{`${dayjs(row.start).format("M/D/YYYY")} - ${dayjs(
                row.end
              ).format("M/D/YYYY")}`}</TableCell>
              <TableCell>{row.billingPeriod}</TableCell>
              <TableCell>{formatCurrency(row.price, 2)}</TableCell>
              <TableCell>
                {`${row.poundsPerCycle}lbs per ${row.cycleLength}`}
              </TableCell>
              <TableCell
                className="text-blue-primary hover:text-orange font-bold"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log(`Navigating to submarket/${row.submarket.id}`);
                }}
              >
                {row.submarket.name}
              </TableCell>
            </TableRow>
          ))}
      </Table>
    </>
  );
};
