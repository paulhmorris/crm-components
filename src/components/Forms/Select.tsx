import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import { useField } from "react-final-form";
import { classNames } from "utils/helpers";

interface ISelect {
  name: string;
  options: any;
  label: string;
}

export const Select = ({ name, label, options }: ISelect) => {
  const {
    input: { value, onChange },
  } = useField(name);

  console.log(value);

  return (
    <Listbox value={value} onChange={onChange} name={name}>
      {({ open }) => (
        <div className="relative mt-1 w-full">
          <Listbox.Button className="peer form-select">
            <span className="block h-6 truncate">{value}</span>
          </Listbox.Button>
          <Listbox.Label
            className={classNames(
              value || open ? "-top-5" : "top-0",
              "form-label left-0.5"
            )}
          >
            {label}
          </Listbox.Label>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
              {options.map(
                (option: { id: number; name: string }, optionIdx: number) => (
                  <Listbox.Option
                    key={optionIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active && "bg-blue text-white"
                      }`
                    }
                    value={option.name}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {option.name}
                        </span>
                        {selected && (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-blue",
                              "absolute inset-y-0 left-0 flex items-center pl-3"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        )}
                      </>
                    )}
                  </Listbox.Option>
                )
              )}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
};
