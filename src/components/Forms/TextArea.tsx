import { FieldValues, useController, ValidationRule } from "react-hook-form";
import { TextAreaProps } from "types";
import { classNames } from "utils/helpers";
import { ErrorMessage } from "./ErrorMessage";
import { FieldDescription } from "./FieldDescription";

export const TextArea = <T extends FieldValues>({
  label,
  description,
  ...props
}: TextAreaProps<T>) => {
  const {
    field,
    formState: { isSubmitting },
    fieldState: { error },
  } = useController(props);
  const { name, required, disabled, rules } = props;

  const isDisabled: boolean | undefined = isSubmitting || disabled;
  const isRequired: ValidationRule<boolean> | boolean | undefined =
    required || !!rules?.required;

  return (
    <div className="relative">
      <label
        className={classNames(
          "text-[.625rem] font-bold uppercase transition",
          isDisabled
            ? "pointer-events-none text-gray-300"
            : error
            ? "text-error"
            : "text-gray-secondary"
        )}
        htmlFor={name}
      >
        {label}
        {isRequired ? " *" : ""}
      </label>
      <textarea
        {...field}
        {...props}
        id={name}
        rows={4}
        placeholder="Go ahead, type something..."
        disabled={isDisabled}
        aria-describedby={
          error
            ? `${name}-error`
            : description
            ? `${name}-description`
            : undefined
        }
        className={classNames(
          "inline-block h-full w-full rounded border-0 bg-white text-sm shadow-inner ring-1 ring-gray-secondary transition placeholder:text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-primary disabled:text-gray-300 disabled:ring-gray-300 disabled:placeholder:text-transparent",
          error && "focus:border-error focus:ring-error"
        )}
      ></textarea>

      {/* Description and error visibility logic */}
      <div className="mt-0 ml-[1px] min-h-[1.25rem] text-xs">
        {description && (isDisabled || !error) && (
          <FieldDescription
            name={name}
            description={description}
            isDisabled={isDisabled}
          />
        )}
        {error && !isDisabled && <ErrorMessage name={name} error={error} />}
      </div>
    </div>
  );
};
