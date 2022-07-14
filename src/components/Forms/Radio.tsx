import { Field } from "react-final-form";
import { RadioProps } from "types";

export const Radio = ({
  name,
  value,
  label,
  fieldProps,
  ...props
}: RadioProps) => {
  return (
    <Field name={name} type="radio" value={value.toString()} {...fieldProps}>
      {({ input }) => (
        <div className="flex items-center space-x-2">
          <input
            {...props}
            {...input}
            id={value.toString()}
            className="cursor-pointer text-tide-blue transition-colors duration-75 focus:ring-transparent"
          />
          <label htmlFor={value.toString()} className="cursor-pointer text-xs">
            {label}
          </label>
        </div>
      )}
    </Field>
  );
};
