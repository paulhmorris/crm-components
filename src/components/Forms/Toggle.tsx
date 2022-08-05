import { Switch } from "@headlessui/react";
import { ComponentPropsWithRef } from "react";
import { useField } from "react-final-form";
import { classNames } from "utils/helpers";

interface ToggleProps
  extends Omit<ComponentPropsWithRef<"button">, "value" | "onChange"> {
  name: string;
  label?: string;
}

export const Toggle = ({ name, label, ...props }: ToggleProps) => {
  const {
    input: { value, onChange },
  } = useField(name);

  return (
    <div className={classNames("flex items-center space-x-2")}>
      <Switch.Group>
        <Switch
          checked={!!value}
          onChange={onChange}
          name={name}
          {...props}
          className={classNames(
            // on and disabled
            value && props.disabled
              ? "border-blue-100 bg-blue-100"
              : // on
              value
              ? "border-blue-200 bg-blue-200"
              : // off and disabled
              !value && props.disabled
              ? "border-gray-200 bg-gray-100"
              : // off
                "border-gray-200 bg-gray-200",
            "ease relative inline-flex h-5 w-8 shrink-0 cursor-pointer rounded-full border outline-transparent transition duration-300 ease-[cubic-bezier(0,0,0,1)] focus:outline-none focus-visible:outline-2 focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 disabled:cursor-auto"
          )}
        >
          <span className="sr-only">Toggle {label}</span>
          <span
            aria-hidden="true"
            className={classNames(
              value ? "translate-x-3" : "translate-x-0",
              "inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-toggle transition duration-300 ease-[cubic-bezier(0,0,0,1)]"
            )}
          />
        </Switch>
        {label && (
          <Switch.Label
            className={classNames(
              props.disabled && "cursor-default opacity-30",
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
