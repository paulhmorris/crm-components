import { useController, useFormContext } from "react-hook-form";
import { CheckboxProps } from "types";
import { classNames } from "utils/helpers";

export const Checkbox = ({
  name,
  label,
  controllerProps,
  ...props
}: CheckboxProps) => {
  const {
    register,
    formState: { isSubmitting },
  } = useFormContext();
  const {
    field: { value },
  } = useController({ name });

  const isDisabled: boolean | undefined = isSubmitting || props.disabled;
  return (
    <div className="flex items-center space-x-2">
      <input
        {...register(name, { ...controllerProps?.rules })}
        {...props}
        id={name}
        disabled={isDisabled}
        checked={value}
        type="checkbox"
        className="h-4 w-4 cursor-pointer rounded-[3px] border border-blue-200 text-blue-200 transition duration-75 focus:shadow-none focus:outline-none focus:ring-0 focus:ring-transparent disabled:pointer-events-none disabled:cursor-auto disabled:border-blue-100 disabled:text-blue-100"
      />
      <label
        htmlFor={name}
        className={classNames(
          isDisabled &&
            "pointer-events-none cursor-auto opacity-30 transition-colors duration-75",
          "cursor-pointer text-xs"
        )}
      >
        {label}
      </label>
    </div>
  );
};
