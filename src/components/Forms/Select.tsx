import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useField, UseFieldConfig } from "react-final-form";
import { classNames } from "utils/helpers";

interface ISelect {
  /** Field name. This name will be used in the payload. */
  name: string;
  /** Field label. This acts as the placeholder until in focus */
  label: string;
  /** The options to populate the select */
  fieldProps?: UseFieldConfig<string>;
  children: React.ReactNode;
}

export const Select = ({ name, label, fieldProps, children }: ISelect) => {
  const {
    input: { value, onChange },
  } = useField(name, { ...fieldProps });

  return (
    <Listbox value={value} onChange={onChange} name={name}>
      {({ open }) => (
        <div className="relative mt-1 w-full">
          <Listbox.Button
            className={classNames(
              "form-select",
              open && "shadow-border-b-2 shadow-blue-200"
            )}
          >
            <span className="block h-6 truncate">{value}</span>
          </Listbox.Button>
          <Listbox.Label
            className={classNames(
              value || open ? "pointer-events-auto -top-5" : "top-0",
              "form-label pointer-events-none left-0.5"
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
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
              {children}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
};
