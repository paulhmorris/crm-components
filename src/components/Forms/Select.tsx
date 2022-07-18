import { Field } from "react-final-form";
import { SelectProps } from "types";
import { classNames } from "utils/helpers";

export const Select = ({ name, label, children, fieldProps }: SelectProps) => {
  return (
    <Field name={name} type="select" {...fieldProps}>
      {({ input, meta: { active } }) => (
        <div className="relative">
          <select
            {...input}
            className="form-select relative inline-block w-full cursor-pointer border-0 bg-white py-0 pl-0.5 pr-10 text-left text-base shadow-border-b shadow-gray-300 transition placeholder:text-transparent hover:shadow-border-b-2 hover:shadow-blue-200 focus:shadow-border-b-2 focus:shadow-blue-200 focus:outline-none focus:ring-0 focus-visible:border-blue-200 disabled:text-gray-300"
          >
            {children}
          </select>
          <label
            htmlFor={name}
            className={classNames(
              input.value || active ? "pointer-events-auto -top-5" : "top-0",
              "pointer-events-none absolute left-0.5 select-none text-sm font-bold text-gray-400 transition-all ease-out"
            )}
          >
            {label}
          </label>
        </div>
      )}
    </Field>
  );
};
