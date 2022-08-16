import {
  randBoolean,
  randFutureDate,
  randPastDate,
  randText,
  randUuid,
  randWord,
} from "@ngneat/falso";
import { SearchBox } from "components/SearchBox";
import { Table, TableCell, TableRow } from "components/Table";
import { CouponTag } from "components/Tags";
import dayjs from "dayjs";
import { useMemo, useState } from "react";

type mockTableRow = {
  id: string;
  name: string;
  code: string;
  description: string | null;
  timeFrame: {
    alwaysActive: boolean;
    startDate: Date | null;
    endDate: Date | null;
  };
};

export const Coupons = () => {
  const x = true;
  const data = useMemo(() => {
    const arr: mockTableRow[] = [];
    for (let i = 0; i < 50; i++) {
      const alwaysActive = randBoolean();
      arr.push({
        id: randUuid(),
        name: randText({ charCount: 20 }),
        code: randWord(),
        description: randText({ charCount: 20 }),
        timeFrame: {
          alwaysActive,
          startDate: alwaysActive ? null : randPastDate(),
          endDate: alwaysActive ? null : randFutureDate(),
        },
      });
    }
    return arr;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [x]);

  const [filter, setFilter] = useState("");
  const filteredCoupons =
    filter === ""
      ? data
      : data &&
        data.filter((coupon) => {
          return (
            coupon.name.toLowerCase().includes(filter.toLowerCase()) ||
            coupon.code.toLowerCase().includes(filter.toLowerCase()) ||
            coupon.description?.toLowerCase().includes(filter.toLowerCase())
          );
        });

  if (!filteredCoupons) return null;
  const headers = ["Name", "Description", "Active Dates"];
  return (
    <>
      <div className="max-w-md p-6">
        <SearchBox
          onChange={({ target }) => setFilter(target.value)}
          placeholder="Filter by name, code, or description"
        />
      </div>
      <Table headers={headers} className="table-fixed">
        {filteredCoupons
          .sort((a, b) =>
            a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1
          )
          .map((coupon) => (
            <TableRow
              key={coupon.id}
              onClick={() => console.log(`Navigating to coupons/${coupon.id}`)}
              className="cursor-pointer"
            >
              <TableCell>
                <a className="inline-block font-bold" href="#">
                  <CouponTag
                    text={coupon.code}
                    isInactive={
                      coupon.timeFrame.endDate
                        ? coupon.timeFrame.endDate < new Date()
                        : false
                    }
                  />
                </a>
              </TableCell>
              <TableCell>
                <p className="font-bold">{coupon.name}</p>
                <p className="text-gray-secondary">{coupon.description}</p>
              </TableCell>
              <TableCell
                className={coupon.timeFrame.alwaysActive ? "text-gray-300" : ""}
              >
                {coupon.timeFrame.alwaysActive
                  ? "Always active"
                  : `${dayjs(coupon.timeFrame.startDate).format(
                      "M/D/YYYY"
                    )} - ${dayjs(coupon.timeFrame.endDate).format("M/D/YYYY")}`}
              </TableCell>
            </TableRow>
          ))}
      </Table>
    </>
  );
};
