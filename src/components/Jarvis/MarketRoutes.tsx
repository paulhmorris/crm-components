import { rand, randNumber, randText, randUuid } from "@ngneat/falso";
import { Table, TableCell, TableRow } from "components/Table";
import { WEEKDAYS } from "mockData";
import { useMemo, useReducer } from "react";
import { Weekday } from "types";
import { weekdaySelectorReducer } from "utils/weekdaySelectorReducer";
import { WeekdaySelector } from "./WeekdaySelector";

const headers = ["Name", "Weekdays", "Vehicle", "Stops"];
type mockTableRow = {
  id: string;
  name: string;
  weekdays: Weekday[];
  vehicle: string;
  numberOfStops: number;
};

function randomWeekday() {
  const arr = [];
  for (let i = 0; i < randNumber({ min: 0, max: 3 }); i++) {
    arr.push(rand(WEEKDAYS));
  }
  return [...new Set(arr)].sort((a, b) => a.dayValue - b.dayValue);
}

export const MarketRoutes = () => {
  const x = true;
  const data = useMemo(() => {
    const arr: mockTableRow[] = [];
    for (let i = 0; i < 8; i++) {
      arr.push({
        id: randUuid(),
        name: randText({ charCount: 20 }),
        weekdays: randomWeekday(),
        vehicle: randText(),
        numberOfStops: randNumber({ min: 0, max: 100 }),
      });
    }
    return arr;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [x]);

  // ex: [0, 1, 2, 3, 4, 5, 6]
  const initialState = [
    ...new Set(data.map((r) => r.weekdays.map((x) => x.dayValue)).flat()),
  ];
  const [activeWeekdays, dispatch] = useReducer(
    weekdaySelectorReducer,
    initialState
  );

  console.log(initialState);
  return (
    <>
      <div className="p-6">
        <p className="mb-2 text-secondary">Filter by route day</p>
        <WeekdaySelector
          activeWeekdays={activeWeekdays}
          dispatch={dispatch}
          disabledDays={[6]}
        />
      </div>
      <Table headers={headers}>
        {data
          // If one of the route weekdays is in the weekday selector
          .filter((route) =>
            route.weekdays.some((day) => activeWeekdays.includes(day.dayValue))
          )
          // Sort alphabetically
          .sort((a, b) =>
            a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1
          )
          .map((route) => (
            <TableRow
              key={route.id}
              onClick={() => console.log(`Navigating to routes/${route.id}`)}
              className="cursor-pointer"
            >
              <TableCell>
                <a className="inline-block font-bold" href="#">
                  {route.name}
                </a>
              </TableCell>
              <TableCell>
                {route.weekdays.map((w) => w.fullName.slice(0, 3)).join(", ")}
              </TableCell>
              <TableCell>{route.vehicle}</TableCell>
              <TableCell>{route.numberOfStops}</TableCell>
            </TableRow>
          ))}
      </Table>
    </>
  );
};
