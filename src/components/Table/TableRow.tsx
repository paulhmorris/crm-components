import { ComponentPropsWithoutRef } from "react";
import { classNames } from "utils/helpers";

export const TableRow = ({
  children,
  ...props
}: ComponentPropsWithoutRef<"tr">) => {
  return (
    <tr
      {...props}
      className={classNames("hover:bg-blue-50/20", props.className)}
    >
      {children}
    </tr>
  );
};
