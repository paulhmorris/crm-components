import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";
import { SelectOptionProps } from "types";
import { classNames } from "utils/helpers";

export const SelectOption = ({ value, label }: SelectOptionProps) => {
  return (
    <Listbox.Option
      value={value}
      className={({ active }) =>
        classNames(
          active ? "bg-gray-200" : "bg-white",
          "relative cursor-default select-none py-1.5 pl-9 pr-4 text-sm"
        )
      }
    >
      {({ selected, active }) => (
        <>
          <span
            className={classNames(
              "block truncate",
              active && selected
                ? "font-medium text-blue-200"
                : selected
                ? "font-medium text-blue-200"
                : "font-normal"
            )}
          >
            {label}
          </span>
          {selected && (
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-200">
              <CheckIcon className="h-4 w-4" aria-hidden="true" />
            </span>
          )}
        </>
      )}
    </Listbox.Option>
  );
};
