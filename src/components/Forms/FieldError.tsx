import { FieldError } from "react-hook-form";

type FieldErrorProps = {
  name: string;
  error: FieldError;
};
export const ErrorMessage = ({ error, name }: FieldErrorProps) => {
  if (!error) return null;
  return (
    <span role="alert" id={`${name}-error`} className="text-error">
      {error.message}
    </span>
  );
};
