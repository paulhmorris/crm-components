import { ComponentPropsWithoutRef, ReactNode } from "react";

interface Props extends ComponentPropsWithoutRef<"table"> {
  headers: string[];
  children: ReactNode;
}

export const Table = ({ children, headers, ...props }: Props) => {
  return (
    <table
      className={`relative min-w-full border-separate border-spacing-0 ${props.className}`}
      {...props}
    >
      <thead className={`bg-white`}>
        <tr>
          {headers.map((header) => (
            <th
              key={header}
              scope="col"
              className="sticky top-0 z-10 border-b-2 border-gray-300 bg-white bg-opacity-80 pt-3 pb-2 pl-4 pr-3 text-left text-xs font-bold capitalize text-primary backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};
