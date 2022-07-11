import { ComponentPropsWithoutRef } from "react";

interface IButton extends ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary" | "tertiary" | "card";
}

export const Button = ({
  variant = "primary",
  type = "button",
  children,
  ...props
}: IButton) => {
  return (
    <button
      className={
        variant === "primary"
          ? "btn-primary"
          : variant === "secondary"
          ? "btn-secondary" 
          : variant === "card" ? "btn-card"
          : "btn-tertiary"
      }
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
