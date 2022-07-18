import { Field } from "react-final-form";
import { CheckboxProps } from "types";
import { classNames } from "utils/helpers";

export const Checkbox = ({
  name,
  label,
  fieldProps,
  ...props
}: CheckboxProps) => {
  return (
    <Field name={name} type="checkbox" {...fieldProps}>
      {({ input }) => (
        <div className="flex items-center space-x-2">
          <input
            {...input}
            {...props}
            id={name}
            className="h-4 w-4 cursor-pointer rounded-[3px] border border-blue-200 text-blue-200 transition duration-75 focus:shadow-none focus:outline-none focus:ring-0 focus:ring-transparent disabled:pointer-events-none disabled:cursor-auto disabled:border-blue-100 disabled:text-blue-100"
          />
          <label
            htmlFor={name}
            className={classNames(
              props.disabled && "pointer-events-none cursor-auto opacity-30",
              "cursor-pointer text-xs"
            )}
          >
            {label}
          </label>
        </div>
      )}
    </Field>
  );
};
