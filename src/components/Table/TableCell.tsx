import { ComponentPropsWithoutRef } from "react";
import { classNames } from "utils/helpers";

export const TableCell = ({
  children,
  ...props
}: ComponentPropsWithoutRef<"td">) => {
  return (
    <td
      {...props}
      className={classNames(
        "border-b border-gray-200 py-4 pl-4 pr-3 text-xs sm:pl-6 lg:pl-8",
        props.className
      )}
    >
      {children}
    </td>
  );
};
