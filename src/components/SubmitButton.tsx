import { ComponentPropsWithoutRef } from "react";
import { FormSpy } from "react-final-form";
import { classNames } from "utils/helpers";
import { ButtonSpinner } from "./Loaders/ButtonSpinner";

export interface SubmitButtonProps
  extends Omit<ComponentPropsWithoutRef<"button">, "type" | "disabled"> {
  text: string;
  submittingText: string;
  variant?: "primary" | "secondary" | "tertiary";
}

export const SubmitButton = ({
  text,
  submittingText,
  variant = "primary",
  className,
  ...props
}: SubmitButtonProps) => {
  return (
    <FormSpy
      subscription={{
        hasValidationErrors: true,
        pristine: true,
        submitting: true,
        submitFailed: true,
        dirtySinceLastSubmit: true,
      }}
    >
      {({
        pristine,
        hasValidationErrors,
        submitting,
        submitFailed,
        dirtySinceLastSubmit,
      }) => (
        <button
          type="submit"
          disabled={
            submitting ||
            pristine ||
            hasValidationErrors ||
            (submitFailed && !dirtySinceLastSubmit)
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
          {submitting ? submittingText : text}
          {submitting && (
            <span className="-mr-1 ml-2">
              <ButtonSpinner />
            </span>
          )}
        </button>
      )}
    </FormSpy>
  );
};
