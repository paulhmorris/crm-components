import {
  randEmail,
  randFullName,
  randPhoneNumber,
  randRole,
  randUuid,
} from "@ngneat/falso";
import { SearchBox } from "components/SearchBox";
import { Table, TableCell, TableRow } from "components/Table";
import { useMemo, useState } from "react";

type mockTableRow = {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
};

export const Employees = () => {
  const x = true;
  const data = useMemo(() => {
    const arr: mockTableRow[] = [];
    for (let i = 0; i < 50; i++) {
      arr.push({
        id: randUuid(),
        name: randFullName(),
        role: randRole(),
        email: randEmail(),
        phone: randPhoneNumber({ countryCode: "US" }),
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
        data.filter((employee) => {
          return (
            employee.name.toLowerCase().includes(filter.toLowerCase()) ||
            employee.role.toLowerCase().includes(filter.toLowerCase()) ||
            employee.email?.toLowerCase().includes(filter.toLowerCase()) ||
            employee.phone?.toLowerCase().includes(filter.toLowerCase())
          );
        });

  if (!filteredCoupons) return null;
  const headers = ["Name", "Role", "Email", "Phone Number"];
  return (
    <>
      <div className="max-w-md p-6">
        <SearchBox
          onChange={({ target }) => setFilter(target.value)}
          placeholder="Filter by name, role, email, or phone"
        />
      </div>
      <Table headers={headers} className="table-fixed">
        {filteredCoupons
          .sort((a, b) =>
            a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1
          )
          .map((employee) => (
            <TableRow
              key={employee.id}
              onClick={() =>
                console.log(`Navigating to coupons/${employee.id}`)
              }
              className="cursor-pointer"
            >
              <TableCell>
                <a className="inline-block font-bold" href="#">
                  {employee.name}
                </a>
              </TableCell>
              <TableCell className="text-secondary">{employee.role}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.phone}</TableCell>
            </TableRow>
          ))}
      </Table>
    </>
  );
};
