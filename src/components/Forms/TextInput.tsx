import { useController, useFormContext } from "react-hook-form";
import { TextInputProps } from "types";
import { classNames } from "utils/helpers";
import { ErrorMessage } from "./ErrorMessage";

export const TextInput = ({
  name,
  label,
  type = "text",
  description,
  controllerProps,
  ...props
}: TextInputProps) => {
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
    <div className="relative pt-5">
      <input
        {...register(name, { ...controllerProps?.rules })}
        {...props}
        id={name}
        type={type}
        placeholder="doNotRemove"
        disabled={isDisabled}
        required={isRequired}
        aria-describedby={
          error
            ? `${name}-error`
            : description
            ? `${name}-description`
            : undefined
        }
        className={classNames(
          "peer inline-block w-full border-0 py-0 pl-0.5 text-base shadow-border-b shadow-gray-300 transition placeholder:text-transparent hover:shadow-border-b-2 hover:shadow-blue-200 focus:shadow-border-b-2 focus:shadow-blue-200 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:text-gray-300",
          error && "shadow-error hover:shadow-error focus:shadow-error"
        )}
      />
      <label
        className={classNames(
          "absolute top-0 left-0.5 select-none text-sm font-medium transition-all ease-out peer-placeholder-shown:pointer-events-none peer-placeholder-shown:top-5 peer-placeholder-shown:left-0.5 peer-required:after:content-['_*'] peer-focus:top-0 peer-focus:left-0.5",
          isDisabled
            ? "pointer-events-none text-gray-300"
            : error
            ? "text-error"
            : "text-secondary"
        )}
        htmlFor={name}
      >
        {label}
      </label>

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
