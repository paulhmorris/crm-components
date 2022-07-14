import { useField } from "react-final-form";
import { TextInputProps } from "types";
import { classNames } from "utils/helpers";
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
    meta: { touched, submitting, invalid, valid },
  } = useField(name, { ...fieldProps });

  return (
    <div className="form-group pt-5">
      <input
        {...input}
        {...props}
        id={name}
        type={type}
        placeholder="doNotRemove"
        disabled={submitting || props.disabled}
        aria-describedby={`${name}-error`}
        className={classNames(
          touched &&
            invalid &&
            "shadow-error hover:shadow-error focus:shadow-error",
          "peer form-input"
        )}
      />
      <label
        className={classNames(
          "form-label peer-placeholder-shown:pointer-events-none peer-placeholder-shown:top-5 peer-placeholder-shown:left-0.5 peer-required:after:content-['_*'] peer-focus:top-0 peer-focus:left-0.5",
          touched && invalid && "text-error",
          props.disabled && "pointer-events-none text-gray-300"
        )}
        htmlFor={name}
      >
        {label}
      </label>
      <div className="mt-1.5 ml-[1px] text-xs">
        {valid && description && (
          <p className="text-xs font-normal text-secondary">{description}</p>
        )}
        <span className="text-error">
          <FieldError name={name} />
        </span>
      </div>
    </div>
  );
};
