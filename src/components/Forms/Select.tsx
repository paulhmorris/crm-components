import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useField } from "react-final-form";
import { SelectProps } from "types";
import { classNames } from "utils/helpers";
import { FieldError } from "./FieldError";
import { SelectOption } from "./SelectOption";

export const Select = ({
  name,
  label,
  description,
  fieldProps,
  options,
  ...props
}: SelectProps) => {
  const {
    input,
    meta: { valid, touched },
  } = useField(name, { ...fieldProps });

  const [selectedOption, setSelectedOption] = useState(
    options.find((o) => o.value === input.value)
  );

  useEffect(() => {
    setSelectedOption(options.find((o) => o.value === input.value));
  }, [input.value, options]);

  return (
    <Listbox {...input} disabled={props.disabled}>
      {({ open }) => (
        <div className="relative mt-1 h-[70px] w-full pt-5">
          <Listbox.Button
            className={classNames(
              "form-select relative inline-block w-full cursor-pointer border-0 bg-white py-0 pl-0.5 pr-10 text-left text-base shadow-border-b shadow-gray-300 transition placeholder:text-transparent hover:shadow-border-b-2 hover:shadow-blue-200 focus:shadow-border-b-2 focus:shadow-blue-200 focus:outline-none focus:ring-0",
              open && "shadow-border-b-2 shadow-blue-200",
              props.disabled && "pointer-events-none text-gray-300"
            )}
            {...props}
          >
            <span className="block h-6 truncate">{selectedOption?.label}</span>
          </Listbox.Button>
          <Listbox.Label
            className={classNames(
              input.value || open ? "pointer-events-auto top-0" : "top-5",
              "pointer-events-none absolute left-0.5 select-none text-sm font-bold transition-all ease-out",
              props.disabled
                ? "pointer-events-none text-gray-300"
                : "text-gray-400"
            )}
          >
            {label}
          </Listbox.Label>
          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded bg-white py-2 shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
              {options.map((option) => (
                <SelectOption
                  key={option.value}
                  value={option.value}
                  label={option.label}
                />
              ))}
            </Listbox.Options>
          </Transition>
          <div className="mt-1 ml-[1px] min-h-[1.25rem] text-xs">
            {((valid && description) || !touched) && (
              <p className="text-xs font-normal text-secondary">
                {description}
              </p>
            )}
            <span className="text-error">
              <FieldError name={name} />
            </span>
          </div>
        </div>
      )}
    </Listbox>
  );
};
