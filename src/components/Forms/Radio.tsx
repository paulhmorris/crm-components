import { FieldValues, useController } from "react-hook-form";
import { RadioProps } from "types";
import { classNames } from "utils/helpers";

export const Radio = <T extends FieldValues>({
  label,
  value,
  ...props
}: RadioProps<T>) => {
  const {
    field,
    formState: { isSubmitting },
  } = useController(props);
  const { name, disabled } = props;

  const isDisabled: boolean | undefined = isSubmitting || disabled;

  return (
    <div className="flex items-center space-x-2">
      <input
        {...field}
        {...props}
        id={value.toString()}
        type="radio"
        value={value}
        name={name}
        disabled={isDisabled}
        className="border-blue-primary text-blue-primary cursor-pointer shadow-sm transition duration-75 focus:ring-transparent disabled:border-blue-100 disabled:text-blue-100"
      />
      <label
        htmlFor={value.toString()}
        className={classNames(
          "cursor-pointer text-xs transition-colors duration-75",
          isDisabled && "text-gray-300"
        )}
      >
        {label}
      </label>
    </div>
  );
};
