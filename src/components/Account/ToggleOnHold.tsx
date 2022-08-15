import { Toggle } from "components/Forms/Toggle";
import { useForm } from "react-hook-form";

export const ToggleOnHold = ({ defaultValues }: any) => {
  const { control, handleSubmit } = useForm({ defaultValues });
  const onSubmit = async () => {
    console.log("Toggled on hold");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Toggle
        control={control}
        name="onHold"
        onClick={() => handleSubmit(onSubmit)()}
      />
    </form>
  );
};
