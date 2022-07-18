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
    <div className="relative">
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
          "inline-block w-full rounded border-0 bg-white text-sm ring-1 ring-gray-400 transition-shadow placeholder:text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:text-gray-300 disabled:ring-gray-300 disabled:placeholder:text-transparent",
          touched && invalid && "border-error text-error focus:border-error"
        )}
      ></textarea>
      <div className="mt-1 ml-[1px] text-xs text-error">
        <FieldError name={name} />
      </div>
    </div>
  );
};
