import { ComponentPropsWithoutRef } from "react";
import { UseFormReturn } from "react-hook-form";
import { classNames } from "utils/helpers";
import { ButtonSpinner } from "./Loaders/ButtonSpinner";

export interface SubmitButtonProps
  extends Omit<ComponentPropsWithoutRef<"button">, "type" | "disabled"> {
  formState: Pick<UseFormReturn, "formState">;
  text: string;
  submittingText: string;
  variant?: "primary" | "secondary" | "tertiary";
}

export const SubmitButton = ({
  text,
  submittingText,
  variant = "primary",
  className,
  formState,
  ...props
}: SubmitButtonProps) => {
  const {
    formState: { isDirty, isSubmitting, isValid, isSubmitSuccessful },
  } = formState;
  return (
    <button
      type="submit"
      disabled={
        isSubmitting || !isDirty || !isValid || (!isSubmitSuccessful && isDirty)
      }
      {...props}
      className={classNames(
        variant === "primary"
          ? "btn-primary"
          : variant === "secondary"
          ? "btn-secondary"
          : variant === "tertiary" && "btn-tertiary",
        className
      )}
    >
      {isSubmitting ? submittingText : text}
      {isSubmitting && (
        <span className="-mr-1 ml-2">
          <ButtonSpinner />
        </span>
      )}
    </button>
  );
};
