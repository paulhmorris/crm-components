import { Field } from "react-final-form";

export const FieldDescription = ({
  name,
  description,
}: {
  name: string;
  description?: string;
}) => {
  if (!description) return null;

  return (
    <Field
      name={name}
      subscription={{
        touched: true,
        invalid: true,
      }}
      render={({ meta: { touched, invalid } }) =>
        (!invalid || !touched) && (
          <p className="text-xs font-normal text-secondary">{description}</p>
        )
      }
    />
  );
};
