import { ComponentPropsWithoutRef } from "react";
import { classNames } from "utils/helpers";

interface IButton extends ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary" | "tertiary" | "card";
}

export const Button = ({
  variant = "primary",
  type = "button",
  children,
  className,
  ...props
}: IButton) => {
  return (
    <button
      {...props}
      className={classNames(
        variant === "primary"
          ? "btn-primary"
          : variant === "secondary"
          ? "btn-secondary"
          : variant === "card"
          ? "btn-card"
          : "btn-tertiary",
        className
      )}
      type={type}
    >
      {children}
    </button>
  );
};
