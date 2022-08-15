import { Switch } from "@headlessui/react";
import { FieldValues, useController } from "react-hook-form";
import { ToggleProps } from "types";
import { classNames } from "utils/helpers";

export const Toggle = <T extends FieldValues>({
  label,
  ...props
}: ToggleProps<T>) => {
  const {
    field,
    formState: { isSubmitting },
  } = useController(props);
  const { disabled, name } = props;

  const isDisabled: boolean | undefined = isSubmitting || disabled;
  return (
    <div className={classNames("flex items-center space-x-2")}>
      <Switch.Group>
        <Switch
          {...props}
          {...field}
          checked={field.value}
          name={name}
          disabled={isDisabled}
          className={classNames(
            // on and disabled
            field.value && isDisabled
              ? "border-blue-100 bg-blue-100"
              : // on
              field.value
              ? "border-blue-200 bg-blue-200"
              : // off and disabled
              !field.value && isDisabled
              ? "border-gray-200 bg-gray-100"
              : // off
                "border-gray-200 bg-gray-200",
            "relative inline-flex h-5 w-8 shrink-0 cursor-pointer rounded-full border outline-transparent transition duration-200 ease-in-out focus:outline-none focus-visible:outline-2 focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 disabled:cursor-auto"
          )}
        >
          <span className="sr-only">Toggle {label}</span>
          <span
            aria-hidden="true"
            className={classNames(
              field.value ? "translate-x-3" : "translate-x-0",
              "pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-toggle transition duration-200 ease-in-out"
            )}
          />
        </Switch>
        {label && (
          <Switch.Label
            className={classNames(
              isDisabled &&
                "cursor-default opacity-30 transition-colors duration-200",
              "cursor-pointer text-xs"
            )}
          >
            {label}
          </Switch.Label>
        )}
      </Switch.Group>
    </div>
  );
};
