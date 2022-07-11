import { ComponentPropsWithRef } from "react";
import { useField } from "react-final-form";
import { classNames } from "utils/helpers";

interface CheckboxProps extends ComponentPropsWithRef<"input"> {
  name: string;
  label?: string;
}

export const Checkbox = ({ name, label, ...props }: CheckboxProps) => {
  const {
    input: { value, onChange, type = "checkbox", ...inputProps },
  } = useField(name);

  return (
    <div className={classNames("flex items-center space-x-2")}>
      <input
        {...props}
        {...inputProps}
        id={name}
        type={type}
        value={value}
        defaultChecked={value}
        onChange={onChange}
        className="form-checkbox focus:shadow-none focus:outline-none focus:ring-0"
      />
      <label
        htmlFor={name}
        className={classNames(
          props.disabled && "pointer-events-none cursor-auto opacity-30",
          "cursor-pointer"
        )}
      >
        {label}
      </label>
    </div>
  );
};
