import { useController, useFormContext } from "react-hook-form";
import { TextAreaProps } from "types";
import { classNames } from "utils/helpers";
import { ErrorMessage } from "./ErrorMessage";

export const TextArea = ({
  name,
  label,
  description,
  controllerProps,
  ...props
}: TextAreaProps) => {
  const {
    register,
    formState: { isSubmitting },
  } = useFormContext();
  const {
    fieldState: { error },
  } = useController({ name });

  const isDisabled: boolean | undefined = isSubmitting || props.disabled;
  const isRequired: boolean =
    props.required || !!controllerProps?.rules?.required;

  return (
    <div className="relative">
      <label
        className={classNames(
          "text-[.625rem] font-bold uppercase transition",
          isDisabled
            ? "pointer-events-none text-gray-300"
            : error
            ? "text-error"
            : "text-secondary"
        )}
        htmlFor={name}
      >
        {label}
        {props.required ? " *" : ""}
      </label>
      <textarea
        {...register(name, { ...controllerProps?.rules })}
        {...props}
        id={name}
        rows={4}
        placeholder="Go ahead, type something..."
        disabled={isDisabled}
        required={isRequired && !isDisabled}
        aria-describedby={
          error
            ? `${name}-error`
            : description
            ? `${name}-description`
            : undefined
        }
        className={classNames(
          "inline-block h-full w-full rounded border-0 bg-white text-sm ring-1 ring-gray-400 transition placeholder:text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:text-gray-300 disabled:ring-gray-300 disabled:placeholder:text-transparent",
          error && "focus:border-error focus:ring-error"
        )}
      ></textarea>

      {/* Description and error visibility logic */}
      <div className="mt-1 ml-[1px] min-h-[1.25rem] text-xs">
        {description && (isDisabled || !error) && (
          <p
            id={`${name}-description`}
            className={classNames(
              "text-xs font-normal transition-colors",
              isDisabled ? "text-gray-300" : "text-secondary"
            )}
          >
            {description}
          </p>
        )}
        {error && !isDisabled && <ErrorMessage name={name} error={error} />}
      </div>
    </div>
  );
};
