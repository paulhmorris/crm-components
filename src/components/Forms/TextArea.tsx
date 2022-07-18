import { useField } from "react-final-form";
import { TextAreaProps } from "types";
import { classNames } from "utils/helpers";
import { FieldError } from "./FieldError";

export const TextArea = ({
  name,
  label,
  description,
  fieldProps,
  ...props
}: TextAreaProps) => {
  const {
    input,
    meta: { touched, submitting, valid },
  } = useField(name, { ...fieldProps });

  return (
    <div className="relative">
      <label
        className={classNames(
          "text-[.625rem] font-bold uppercase transition",
          touched && !valid && "text-error",
          (submitting || props.disabled) && "text-gray-300"
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
        rows={4}
        placeholder="Go ahead, type something..."
        disabled={submitting || props.disabled}
        aria-describedby={`${name}-error`}
        className={classNames(
          "inline-block h-full w-full rounded border-0 bg-white text-sm ring-1 ring-gray-400 transition placeholder:text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:text-gray-300 disabled:ring-gray-300 disabled:placeholder:text-transparent",
          touched && !valid && "ring-error focus:border-error"
        )}
      ></textarea>
      <div className="ml-[1px] min-h-[1.25rem] text-xs">
        {((valid && description) || !touched) && (
          <p className="text-xs font-normal text-secondary">{description}</p>
        )}
        <span className="text-error">
          <FieldError name={name} />
        </span>
      </div>
    </div>
  );
};
