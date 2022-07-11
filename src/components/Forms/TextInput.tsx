import { ComponentPropsWithoutRef } from "react";
import { useField, UseFieldConfig } from "react-final-form";
import { classNames } from "utils/helpers";
import { FieldError } from "./FieldError";

interface ITextInput extends ComponentPropsWithoutRef<"input"> {
  /** Field name. This name will be used in the payload. */
  name: string;
  /** Field label. This acts as the placeholder until in focus */
  label: string;
  /** Field type. Defaults to "text" */
  type?: "text" | "password" | "email" | "number" | "tel";
  /** Optional description will show below the input. Will not be shown if the field has an error */
  description?: string;
  fieldProps?: UseFieldConfig<string>;
}

export const TextInput = ({
  name,
  label,
  type = "text",
  description,
  fieldProps,
  ...props
}: ITextInput) => {
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
