import { Address, randAddress, randText, randUuid } from "@ngneat/falso";
import { DropdownMenu } from "components/DropdownMenu";
import { DropdownMenuItem } from "components/DropdownMenuItem";
import { SearchBox } from "components/SearchBox";
import { Table, TableCell, TableRow } from "components/Table";
import { useMemo, useState } from "react";
import { classNames } from "utils/helpers";

const headers = ["Name", "Address", "Associated Routes", "Submarket", ""];
type mockTableRow = {
  id: string;
  name: string;
  address: Address;
  associatedRoutes: string;
  submarket: {
    id: string;
    name: string;
  };
};

export const ServicePoints = () => {
  const x = true;
  const data = useMemo(() => {
    const arr: mockTableRow[] = [];
    for (let i = 0; i < 50; i++) {
      arr.push({
        id: randUuid(),
        name: randText({ charCount: 20 }),
        address: randAddress({ includeCountry: false }),
        associatedRoutes:
          Math.random() < 0.7 ? randText() : "No assigned route",
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
  const filteredOptions =
    filter === ""
      ? data
      : data.filter((sp) => {
          return (
            sp.name.toLowerCase().includes(filter.toLowerCase()) ||
            // TODO: this would need to be updated for an associatedRoutes array
            sp.associatedRoutes.toLowerCase().includes(filter.toLowerCase()) ||
            sp.submarket.name.toLowerCase().includes(filter.toLowerCase())
          );
        });

  return (
    <>
      <div className="max-w-md p-6">
        <SearchBox
          onChange={({ target }) => setFilter(target.value)}
          placeholder="Filter by service point, route, or submarket"
        />
      </div>
      <Table headers={headers}>
        {filteredOptions
          .sort((a, b) =>
            a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1
          )
          .map((sp) => (
            <TableRow
              key={sp.id}
              onClick={() =>
                console.log(`Navigating to servicePoints/${sp.id}`)
              }
              className="cursor-pointer"
            >
              <TableCell>
                <a className="inline-block font-bold" href="#">
                  {sp.name}
                </a>
              </TableCell>
              <TableCell>
                {`${sp.address.street} ${sp.address.city}, ${sp.address.zipCode}`}
              </TableCell>
              {/* Ideally this would be an iteration through the routes, and 
                each one highlight orange and open a new tab
            */}
              <TableCell
                onClick={(e) => {
                  e.stopPropagation();
                  console.log(`Navigating to route/${sp.associatedRoutes}`);
                }}
                className={classNames(
                  sp.associatedRoutes === "No assigned route"
                    ? "text-gray-300"
                    : "font-bold text-tide-blue hover:text-tide-orange"
                )}
              >
                {sp.associatedRoutes}
              </TableCell>
              <TableCell
                className="font-bold text-tide-blue hover:text-tide-orange"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log(`Navigating to submarket/${sp.submarket.id}`);
                }}
              >
                {sp.submarket.name}
              </TableCell>
              <TableCell className="py-0">
                <DropdownMenu variant="kebab">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
      </Table>
    </>
  );
};
