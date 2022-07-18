import { Menu } from "@headlessui/react";
import { ComponentPropsWithoutRef } from "react";
import { classNames } from "utils/helpers";

export interface DropdownMenuItemProps
  extends Omit<ComponentPropsWithoutRef<"button">, "className"> {
  children: React.ReactNode;
}

export const DropdownMenuItem = ({
  children,
  ...props
}: DropdownMenuItemProps) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          {...props}
          className={classNames(
            active && "bg-gray-200",
            "flex w-full items-center py-1 pl-4 pr-8 hover:bg-gray-200"
          )}
        >
          {children}
        </button>
      )}
    </Menu.Item>
  );
};
