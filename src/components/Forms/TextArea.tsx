import { useField } from "react-final-form";
import { TextAreaProps } from "types";
import { classNames } from "utils/helpers";
import { FieldDescription } from "./FieldDescription";
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
    meta: { touched, submitting, submitError, invalid, dirtySinceLastSubmit },
  } = useField(name, { ...fieldProps });

  const shouldShowError = touched && invalid && !dirtySinceLastSubmit;
  const isDisabled = submitting || props.disabled;

  return (
    <div className="relative">
      <label
        className={classNames(
          "text-[.625rem] font-bold uppercase transition",
          shouldShowError && "text-error",
          isDisabled && "text-gray-300"
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
        disabled={isDisabled}
        aria-describedby={`${name}-error`}
        aria-invalid={invalid}
        aria-errormessage={submitError ?? undefined}
        className={classNames(
          "inline-block h-full w-full rounded border-0 bg-white text-sm ring-1 ring-gray-400 transition placeholder:text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:text-gray-300 disabled:ring-gray-300 disabled:placeholder:text-transparent",
          shouldShowError && "ring-error focus:border-error"
        )}
      ></textarea>
      <div className="ml-[1px] min-h-[1.25rem] text-xs">
        <FieldDescription description={description} name={name} />
        <FieldError name={name} />
      </div>
    </div>
  );
};
