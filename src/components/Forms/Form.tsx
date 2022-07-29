import { FormProvider, useForm } from "react-hook-form";
import { FormComponent } from "types";

export const Form = ({ defaultValues, children, onSubmit }: FormComponent) => {
  const methods = useForm({ defaultValues, mode: "all" });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
