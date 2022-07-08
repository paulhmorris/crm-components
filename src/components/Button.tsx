import { ComponentPropsWithoutRef } from "react";

interface IButton extends ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary" | "tertiary";
  text: string;
}

export const Button = ({
  variant = "primary",
  type = "button",
  text,
  ...props
}: IButton) => {
  return (
    <button
      className={
        variant === "primary"
          ? "btn-primary"
          : variant === "secondary"
          ? "btn-secondary"
          : "btn-tertiary"
      }
      type={type}
      {...props}
    >
      {text}
    </button>
  );
};
