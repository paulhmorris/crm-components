import { CheckIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import { randBoolean, randFullName, randText, randUuid } from "@ngneat/falso";
import { SearchBox } from "components/SearchBox";
import { Table, TableCell, TableRow } from "components/Table";
import { useMemo, useState } from "react";

type mockTableRow = {
  id: string;
  name: string;
  description: string;
  groupContact: string;
  taxExempt: boolean;
};

export const Groups = () => {
  const x = true;
  const data = useMemo(() => {
    const arr: mockTableRow[] = [];
    for (let i = 0; i < 50; i++) {
      arr.push({
        id: randUuid(),
        name: randText({ charCount: 20 }),
        description: randText({ charCount: 20 }),
        groupContact: randFullName({ withAccents: false }),
        taxExempt: randBoolean(),
      });
    }
    return arr;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [x]);

  const [filter, setFilter] = useState("");
  const filteredCoupons =
    filter === ""
      ? data
      : data.filter((group) => {
          return (
            group.name.toLowerCase().includes(filter.toLowerCase()) ||
            group.groupContact.toLowerCase().includes(filter.toLowerCase()) ||
            group.description?.toLowerCase().includes(filter.toLowerCase())
          );
        });

  if (!filteredCoupons) return null;
  const headers = ["Name", "Description", "Contact", "Tax Exempt"];
  return (
    <>
      <div className="max-w-md p-6">
        <SearchBox
          onChange={({ target }) => setFilter(target.value)}
          placeholder="Filter by name, contact, or description"
        />
      </div>
      <Table headers={headers} className="table-fixed">
        {filteredCoupons
          .sort((a, b) =>
            a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1
          )
          .map((group) => (
            <TableRow
              key={group.id}
              onClick={() => console.log(`Navigating to groups/${group.id}`)}
              className="cursor-pointer"
            >
              <TableCell>
                <a className="inline-block font-bold" href="#">
                  {group.name}
                </a>
              </TableCell>
              <TableCell className="text-gray-secondary">
                {group.description}
              </TableCell>
              <TableCell
                className="group font-bold text-tide-blue hover:text-tide-orange"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log(`Navigating to pepper/${group.groupContact}`);
                }}
              >
                <span className="inline-flex items-center space-x-2">
                  <span>{group.groupContact}</span>
                  <ExternalLinkIcon className="h-4 w-4 text-transparent group-hover:text-gray-300" />
                </span>
              </TableCell>
              <TableCell>
                {group.taxExempt && (
                  <CheckIcon className="h-4 w-4 text-gray-secondary" />
                )}
              </TableCell>
            </TableRow>
          ))}
      </Table>
    </>
  );
};
