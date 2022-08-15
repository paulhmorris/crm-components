import {
  rand,
  randFutureDate,
  randNumber,
  randPastDate,
  randText,
  randUuid,
} from "@ngneat/falso";
import dayjs from "dayjs";
import { useMemo } from "react";
import { formatCurrency } from "utils/helpers";
import { Table, TableCell, TableRow } from "./Table";

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
export const SampleTable = () => {
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

  return (
    <Table headers={headers}>
      {data
        .sort((a, b) => +a.start - +b.start)
        .map((row) => (
          <TableRow
            key={row.id}
            onClick={() => console.log(`Navigating to subscriptions/${row.id}`)}
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
              className="font-bold text-tide-blue hover:text-tide-orange"
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
  );
};
