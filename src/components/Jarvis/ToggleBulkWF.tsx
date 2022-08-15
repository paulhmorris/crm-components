import { Toggle } from "components/Forms/Toggle";
import { useForm, UseFormProps } from "react-hook-form";

export type ToggleBulkWFFormValues = {
  bulkWF: boolean;
};

export const ToggleBulkWF = ({
  defaultValues,
}: Pick<UseFormProps, "defaultValues">) => {
  const { control, handleSubmit } = useForm<ToggleBulkWFFormValues>({
    defaultValues,
  });
  const onSubmit = async (data: ToggleBulkWFFormValues) => {
    console.log("Toggled bulk w&f", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Toggle control={control} name="bulkWF" label="Bulk Wash & Fold" />
    </form>
  );
};
