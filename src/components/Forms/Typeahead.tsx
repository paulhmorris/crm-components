import { Combobox, Transition } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import { FieldValues, useController } from "react-hook-form";
import { SelectProps } from "types";
import { classNames } from "utils/helpers";
import { ErrorMessage } from "./ErrorMessage";
import { FieldDescription } from "./FieldDescription";
import { TypeaheadOption } from "./TypeaheadOption";

export const Typeahead = <T extends FieldValues>({
  label,
  description,
  options,
  ...props
}: SelectProps<T>) => {
  const {
    field,
    formState: { isSubmitting },
    fieldState: { error },
  } = useController(props);
  const { name, disabled } = props;

  const [query, setQuery] = useState("");
  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) => {
          return option.label.toLowerCase().includes(query.toLowerCase());
        });

  const isDisabled: boolean | undefined = isSubmitting || disabled;
  return (
    <Combobox {...field} name={name} disabled={isDisabled}>
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
                isDisabled ? "text-gray-300" : "text-gray-secondary"
              )}
              aria-hidden="true"
            />
          </Combobox.Button>
          <Combobox.Label
            className={classNames(
              field.value || open
                ? "pointer-events-auto top-0 text-xs"
                : "top-5 text-sm",
              "font-medium pointer-events-none absolute left-0.5 select-none transition-all ease-out",
              isDisabled
                ? "pointer-events-none text-gray-300"
                : "text-text-gray-secondary"
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
            {description && (isDisabled || !error) && (
              <FieldDescription
                name={name}
                description={description}
                isDisabled={isDisabled}
              />
            )}
            {error && !isDisabled && <ErrorMessage name={name} error={error} />}
          </div>
        </div>
      )}
    </Combobox>
  );
};
