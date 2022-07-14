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
          <input {...input} {...props} id={name} className="form-checkbox" />
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
