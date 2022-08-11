import { ComponentPropsWithoutRef, ReactNode } from "react";
import { classNames } from "utils/helpers";

interface Props extends ComponentPropsWithoutRef<"tr"> {
  children: ReactNode;
}

export const TableRow = ({ children, ...props }: Props) => {
  return (
    <tr
      {...props}
      className={classNames("hover:bg-blue-50/20", props.className)}
    >
      {children}
    </tr>
  );
};
