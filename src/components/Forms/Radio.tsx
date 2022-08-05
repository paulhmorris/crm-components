import { Field } from "react-final-form";
import { RadioProps } from "types";

export const Radio = ({
  label,
  name,
  value,
  fieldProps,
  ...props
}: RadioProps) => {
  return (
    <Field name={name} type="radio" value={value.toString()} {...fieldProps}>
      {({ input }) => (
        <div className="flex items-center space-x-2">
          <input
            {...input}
            {...props}
            id={value.toString()}
            className="cursor-pointer border-tide-blue text-tide-blue focus:ring-transparent"
          />
          <label htmlFor={value.toString()} className="cursor-pointer text-xs">
            {label}
          </label>
        </div>
      )}
    </Field>
  );
};
