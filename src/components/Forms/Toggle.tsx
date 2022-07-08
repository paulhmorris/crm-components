import { Switch } from "@headlessui/react";
import { ComponentPropsWithRef } from "react";
import { useField } from "react-final-form";
import { classNames } from "utils/helpers";

interface IToggle extends ComponentPropsWithRef<"input"> {
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
          onChange={onChange}
          name={name}
          {...props}
          className={classNames(
            value && props.disabled
              ? "bg-blue-disabled"
              : value
              ? "bg-blue"
              : !value && props.disabled
              ? "bg-white"
              : "bg-gray-200",
            "relative inline-flex h-6 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none  focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-opacity-75 disabled:cursor-auto"
          )}
        >
          <span className="sr-only">Toggle {label}</span>
          <span
            aria-hidden="true"
            className={classNames(
              value ? "translate-x-3" : "translate-x-0",
              "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-2xl shadow-error transition duration-200 ease-in-out"
            )}
          />
        </Switch>
        {label && (
          <Switch.Label className={classNames(props.disabled && "opacity-50")}>
            {label}
          </Switch.Label>
        )}
      </Switch.Group>
    </div>
  );
};
