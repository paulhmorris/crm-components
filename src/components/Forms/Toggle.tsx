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
              ? "border-blue-100 bg-blue-100"
              : // on
              value
              ? "border-blue-200 bg-blue-200"
              : // off and disabled
              !value && props.disabled
              ? "border-gray-200 bg-gray-100"
              : // off
                "border-gray-200 bg-gray-200",
            "form-toggle"
          )}
        >
          <span className="sr-only">Toggle {label}</span>
          <span
            aria-hidden="true"
            className={classNames(
              value ? "translate-x-3" : "translate-x-0",
              "pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-toggle transition duration-300 ease-in-out"
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
