import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useField } from "react-final-form";
import { SelectProps } from "types";
import { classNames } from "utils/helpers";

const Select = ({ name, label, fieldProps, children }: SelectProps) => {
  const { input } = useField(name, { ...fieldProps });

  return (
    <Listbox {...input}>
      {({ open }) => (
        <div className="relative mt-1 w-full">
          <Listbox.Button
            className={classNames(
              "form-select relative inline-block w-full cursor-pointer border-0 bg-white py-0 pl-0.5 pr-10 text-left text-base shadow-border-b shadow-gray-300 transition placeholder:text-transparent hover:shadow-border-b-2 hover:shadow-blue-200 focus:shadow-border-b-2 focus:shadow-blue-200 focus:outline-none focus:ring-0 focus-visible:border-blue-200 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-200 disabled:text-gray-300",
              open && "shadow-border-b-2 shadow-blue-200"
            )}
          >
            <span className="block h-6 truncate">{input.value}</span>
          </Listbox.Button>
          <Listbox.Label
            className={classNames(
              input.value || open ? "pointer-events-auto -top-5" : "top-0",
              "pointer-events-none absolute left-0.5 select-none text-sm font-bold text-gray-400 transition-all ease-out"
            )}
          >
            {label}
          </Listbox.Label>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-75"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
              {children}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
};
