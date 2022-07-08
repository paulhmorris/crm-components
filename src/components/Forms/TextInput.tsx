import formatString from "format-string-by-pattern";
import { ComponentPropsWithoutRef } from "react";
import { useField, UseFieldConfig } from "react-final-form";
import { ValidatorFunction } from "types";
import { classNames, normalizeNumber } from "utils/helpers";
import { phoneMask, zipMask } from "utils/masks";
import { FieldError } from "./FieldError";

interface ITextInput extends ComponentPropsWithoutRef<"input"> {
  /** Field name. This name will be used in the payload. */
  name: string;
  /** Field label. This acts as the placeholder until active */
  label: string;
  /** Field type. */
  type?: "text" | "password" | "email" | "number" | "tel";
  fieldProps?: UseFieldConfig<string>;
  validate?: ValidatorFunction | ((value: string) => ValidatorFunction);
}

export const TextInput = ({
  name,
  label,
  type = "text",
  validate,
  ...props
}: ITextInput) => {
  const {
    input,
    meta: { touched, submitting, invalid },
  } = useField(name, {
    validate,
    // removes everything but numbers for tel inputs
    parse:
      type === "tel" || name === "zipCode"
        ? (v) => normalizeNumber(v)
        : undefined,
    // mask input for type "tel"
    format:
      type === "tel"
        ? formatString(phoneMask)
        : name === "zipCode"
        ? formatString(zipMask)
        : undefined,
  });

  return (
    <div className="form-group">
      <input
        {...input}
        {...props}
        type={type}
        placeholder="doNotRemove"
        minLength={type === "tel" ? 14 : 0}
        required={props.required}
        disabled={submitting || props.disabled}
        aria-describedby={`${name}-error`}
        className={classNames(
          touched &&
            invalid &&
            "shadow-error hover:shadow-error focus:shadow-error",
          "duration peer form-input"
        )}
      />
      <label
        className={classNames(
          "form-label peer-placeholder-shown:top-0.5 peer-placeholder-shown:left-0.5 peer-focus:-top-5 peer-focus:left-0.5",
          touched && invalid && "text-error",
          props.disabled && "text-gray-300"
        )}
        htmlFor={name}
      >
        {label}
        {props.required ? " *" : ""}
      </label>
      <div className="mt-1 ml-[1px] text-xs text-error">
        <FieldError name={name} />
      </div>
    </div>
  );
};
