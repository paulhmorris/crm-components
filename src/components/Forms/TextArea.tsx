import { ComponentPropsWithoutRef } from "react";
import { useField, UseFieldConfig } from "react-final-form";
import { ValidatorFunction } from "types";
import { classNames } from "utils/helpers";
import { FieldError } from "./FieldError";

interface ITextArea extends ComponentPropsWithoutRef<"textarea"> {
  /** Field name. This name will be used in the payload. */
  name: string;
  /** Field label. This acts as the placeholder until active */
  label: string;
  /** Field type. */
  fieldProps?: UseFieldConfig<string>;
  validate?: ValidatorFunction | ((value: string) => ValidatorFunction);
}

export const TextArea = ({ name, label, validate, ...props }: ITextArea) => {
  const {
    input,
    meta: { touched, submitting, invalid },
  } = useField(name, { validate });

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
        value={input.value ?? ""}
        placeholder="Go ahead, type something..."
        required={props.required}
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
