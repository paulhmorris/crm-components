import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";
import { classNames } from "utils/helpers";

type SelectOptionProps = {
  value: string | number;
  displayText: string | number;
};

export const SelectOption = ({ value, displayText }: SelectOptionProps) => {
  return (
    <Listbox.Option
      className={({ active }) =>
        classNames(
          "relative cursor-default select-none py-2 pl-10 pr-4 text-xs ",
          active && "bg-blue-200 text-white"
        )
      }
      value={value}
    >
      {({ selected, active }) => (
        <>
          <span
            className={classNames(
              "block truncate",
              active && selected
                ? "font-medium"
                : selected
                ? "font-medium text-blue-200"
                : "font-normal"
            )}
          >
            {displayText}
          </span>
          {selected && (
            <span
              className={classNames(
                active ? "text-white" : "text-blue-200",
                "absolute inset-y-0 left-0 flex items-center pl-3"
              )}
            >
              <CheckIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          )}
        </>
      )}
    </Listbox.Option>
  );
};
