import { Combobox, Transition } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/solid";
import { Fragment, useState } from "react";
import { useField } from "react-final-form";
import { SelectProps } from "types";
import { classNames } from "utils/helpers";
import { FieldDescription } from "./FieldDescription";
import { FieldError } from "./FieldError";
import { TypeaheadOption } from "./TypeaheadOption";

export const Typeahead = ({
  name,
  label,
  description,
  fieldProps,
  options,
  ...props
}: SelectProps) => {
  const {
    input,
    meta: { submitting },
  } = useField(name, { ...fieldProps });

  const [query, setQuery] = useState("");
  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) =>
          option.label.toLowerCase().includes(query.toLowerCase())
        );

  const isDisabled = submitting || props.disabled;

  return (
    <Combobox {...input} name={name} disabled={isDisabled}>
      {({ open }) => (
        <div className="relative mt-1 h-[70px] w-full pt-5">
          <Combobox.Input
            onChange={(e) => setQuery(e.target.value)}
            displayValue={(value) =>
              options.find((o) => o.value === value)?.label ?? ""
            }
            className={classNames(
              "relative inline-block w-full border-0 bg-white bg-none py-0 pl-0.5 pr-10 text-left text-base shadow-border-b shadow-gray-300 transition placeholder:text-transparent hover:shadow-border-b-2 hover:shadow-blue-200 focus:shadow-border-b-2 focus:shadow-blue-200 focus:outline-none focus:ring-0",
              open && "shadow-border-b-2 shadow-blue-200",
              isDisabled && "pointer-events-none text-gray-300"
            )}
          />
          <Combobox.Button className="absolute right-0.5 bottom-7 flex items-center pr-2">
            <SelectorIcon
              className={classNames(
                "h-5 w-5",
                isDisabled ? "text-gray-300" : "text-secondary"
              )}
              aria-hidden="true"
            />
          </Combobox.Button>
          <Combobox.Label
            className={classNames(
              input.value || open ? "pointer-events-auto top-0" : "top-5",
              "pointer-events-none absolute left-0.5 select-none text-sm font-bold transition-all ease-out",
              isDisabled ? "pointer-events-none text-gray-300" : "text-gray-400"
            )}
          >
            {label}
          </Combobox.Label>
          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded bg-white py-2 shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
              {filteredOptions.map((option) => (
                <TypeaheadOption
                  key={option.value}
                  value={option.value}
                  label={option.label}
                />
              ))}
            </Combobox.Options>
          </Transition>
          {/* Description and error visibility logic */}
          <div className="mt-1 ml-[1px] min-h-[1.25rem] text-xs">
            <FieldDescription description={description} name={name} />
            <FieldError name={name} />
          </div>
        </div>
      )}
    </Combobox>
  );
};
