import { Toggle } from "components/Forms/Toggle";
import { useForm } from "react-hook-form";

export const ToggleAutoRenew = ({ defaultValues }: any) => {
  const { control, handleSubmit } = useForm({ defaultValues });
  const onSubmit = async () => {
    console.log("Toggled autorenew");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Toggle control={control} name="autoRenew" />
    </form>
  );
};
