import { FieldValues, useController } from "react-hook-form";
import { CheckboxProps } from "types";
import { classNames } from "utils/helpers";

export const Checkbox = <T extends FieldValues>({
  label,
  ...props
}: CheckboxProps<T>) => {
  const {
    field,
    formState: { isSubmitting },
  } = useController(props);
  const { name } = props;

  const isDisabled: boolean | undefined = isSubmitting || props.disabled;
  return (
    <div className="flex items-center space-x-2">
      <input
        {...field}
        checked={field.value}
        id={name}
        disabled={isDisabled}
        type="checkbox"
        className="h-4 w-4 cursor-pointer rounded-[3px] border border-blue-primary text-blue-primary shadow-sm transition duration-75 focus:shadow-none focus:outline-none focus:ring-0 focus:ring-transparent disabled:pointer-events-none disabled:cursor-auto disabled:border-blue-100 disabled:text-blue-100"
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
