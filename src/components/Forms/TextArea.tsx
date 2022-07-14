import { useField } from "react-final-form";
import { TextAreaProps } from "types";
import { classNames } from "utils/helpers";
import { FieldError } from "./FieldError";

export const TextArea = ({
  name,
  label,
  fieldProps,
  ...props
}: TextAreaProps) => {
  const {
    input,
    meta: { touched, submitting, invalid },
  } = useField(name, { ...fieldProps });

  return (
    <div className="form-group">
      <label
        className={classNames(
          "text-[.625rem] font-bold uppercase",
          touched && invalid && "text-error",
          props.disabled && "text-gray-300"
        )}
        htmlFor={name}
      >
        {label}
        {props.required ? " *" : ""}
      </label>
      <textarea
        {...input}
        {...props}
        id={name}
        placeholder="Go ahead, type something..."
        disabled={submitting || props.disabled}
        aria-describedby={`${name}-error`}
        className={classNames(
          "form-textarea",
          touched && invalid && "border-error text-error focus:border-error"
        )}
      ></textarea>
      <div className="mt-1 ml-[1px] text-xs text-error">
        <FieldError name={name} />
      </div>
    </div>
  );
};
