import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { ComponentPropsWithRef, Fragment } from "react";
import { classNames } from "utils/helpers";

interface DropdownMenuProps extends ComponentPropsWithRef<"button"> {
  /** The element that will generate the dropdown. Defaults to a kebab */
  variant: "icon" | "button";
  /** If using a button, this will be the text on the button */
  buttonText?: string;
  /** The direction in which the menu will pop out from the button. Defaults to left */
  direction?: "right" | "left";
  /** Width of the menu - must be a Tailwind width class. Defaults to min-w-min */
  menuWidth?: string;
  children: React.ReactNode;
}

export const DropdownMenu = ({
  variant,
  buttonText,
  direction = "left",
  menuWidth = "min-w-min",
  children,
  className,
  ...props
}: DropdownMenuProps) => {
  return (
    <Menu as="div" className={classNames("relative", className)}>
      <Menu.Button className="align-middle" {...props}>
        {variant === "icon" && (
          <DotsVerticalIcon
            className="z-10 h-5 w-5 text-blue-200 hover:text-blue-400"
            aria-hidden="true"
          />
        )}
        {variant === "button" && buttonText && (
          <>
            {buttonText}
            <ChevronDownIcon
              className="ml-2 -mr-2 h-5 w-5"
              aria-hidden="true"
            />
          </>
        )}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-[50ms]"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={classNames(
            menuWidth,
            direction === "right"
              ? "left-0 origin-top-left"
              : "right-0 origin-top-right",
            "absolute z-10 mt-1 rounded bg-white text-xs shadow-md ring-1 ring-gray-200 focus:outline-none"
          )}
        >
          <div className="whitespace-nowrap py-2">{children}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
