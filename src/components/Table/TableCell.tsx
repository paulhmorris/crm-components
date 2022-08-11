import { ComponentPropsWithoutRef, ReactNode } from "react";
import { classNames } from "utils/helpers";

interface Props extends ComponentPropsWithoutRef<"td"> {
  children: ReactNode;
}

export const TableCell = ({ children, ...props }: Props) => {
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
