import { useField } from "react-final-form";
import { TextInputProps } from "types";
import { classNames } from "utils/helpers";
import { FieldDescription } from "./FieldDescription";
import { FieldError } from "./FieldError";

export const TextInput = ({
  name,
  label,
  type = "text",
  description,
  fieldProps,
  ...props
}: TextInputProps) => {
  const {
    input,
    meta: { touched, submitting, dirtySinceLastSubmit, submitError, invalid },
  } = useField(name, { ...fieldProps });

  const shouldShowError = touched && invalid && !dirtySinceLastSubmit;
  const isDisabled = submitting || props.disabled;

  return (
    <div className="relative pt-5">
      <input
        {...input}
        {...props}
        id={name}
        type={type}
        placeholder="doNotRemove"
        disabled={isDisabled}
        aria-describedby={`${name}-error`}
        aria-invalid={invalid}
        aria-errormessage={submitError ?? undefined}
        className={classNames(
          "peer inline-block w-full border-0 py-0 pl-0.5 text-base shadow-border-b shadow-gray-300 transition placeholder:text-transparent hover:shadow-border-b-2 hover:shadow-blue-200 focus:shadow-border-b-2 focus:shadow-blue-200 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:text-gray-300",
          shouldShowError &&
            "shadow-error hover:shadow-error focus:shadow-error"
        )}
      />
      <label
        className={classNames(
          isDisabled
            ? "pointer-events-none text-gray-300"
            : shouldShowError
            ? "text-error"
            : "text-gray-400",
          "absolute top-0 left-0.5 select-none text-sm font-bold transition-all ease-out peer-placeholder-shown:pointer-events-none peer-placeholder-shown:top-5 peer-placeholder-shown:left-0.5 peer-required:after:content-['_*'] peer-focus:top-0 peer-focus:left-0.5"
        )}
        htmlFor={name}
      >
        {label}
      </label>
      <div className="mt-1 ml-[1px] min-h-[1.25rem] text-xs">
        <FieldDescription description={description} name={name} />
        <FieldError name={name} />
      </div>
    </div>
  );
};
