import { Field } from "react-final-form";

export const FieldError = ({ name }: { name: string }) => (
  <Field
    name={name}
    subscription={{
      touched: true,
      error: true,
      submitError: true,
      dirtySinceLastSubmit: true,
    }}
    render={({ meta: { touched, error, submitError, dirtySinceLastSubmit } }) =>
      touched &&
      (error || (submitError && !dirtySinceLastSubmit)) && (
        <span className="text-error" role="alert" id={`${name}-error`}>
          {error || submitError}
        </span>
      )
    }
  />
);
