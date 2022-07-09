import { Switch } from "@headlessui/react";
import { ComponentPropsWithRef } from "react";
import { useField } from "react-final-form";
import { classNames } from "utils/helpers";

interface IToggle extends ComponentPropsWithRef<"button"> {
  name: string;
  label?: string;
}

export const Toggle = ({ name, label, ...props }: IToggle) => {
  const {
    input: { value, onChange },
  } = useField(name);

  return (
    <div className={classNames("flex items-center space-x-2")}>
      <Switch.Group>
        <Switch
          checked={!!value}
          // @ts-expect-error unknown issue
          onChange={onChange}
          name={name}
          {...props}
          className={classNames(
            // on and disabled
            value && props.disabled
              ? "border-blue-disabled bg-blue-disabled"
              : // on
              value
              ? "border-blue bg-blue"
              : // off and disabled
              !value && props.disabled
              ? "border-gray-200 bg-gray-100"
              : // off
                "border-gray-200 bg-gray-200",
            "relative inline-flex h-6 w-9 shrink-0 cursor-pointer rounded-full border transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-opacity-75 disabled:cursor-auto"
          )}
        >
          <span className="sr-only">Toggle {label}</span>
          <span
            aria-hidden="true"
            className={classNames(
              value ? "translate-x-3" : "translate-x-0",
              "pointer-events-none inline-block h-[22px] w-[22px] transform rounded-full bg-white shadow-toggle transition duration-200 ease-in-out"
            )}
          />
        </Switch>
        {label && (
          <Switch.Label
            className={classNames(
              props.disabled && "cursor-auto opacity-50",
              "cursor-pointer"
            )}
          >
            {label}
          </Switch.Label>
        )}
      </Switch.Group>
    </div>
  );
};
