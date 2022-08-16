import { Button } from "components/Button";
import { SubmitButton } from "components/SubmitButton";
import { useForm } from "react-hook-form";
import { sleep } from "utils/helpers";
import { TextInput } from "./TextInput";

export const PasscodeForm = () => {
  const { control, handleSubmit, formState } = useForm({ mode: "onTouched" });
  const { isSubmitting } = formState;
  const onSubmit = async () => {
    await sleep(2000);
    console.log("Logged in");
  };

  return (
    <div className="mx-auto flex w-full max-w-xs flex-col justify-between">
      <div className="mb-6">
        <h1 className="text-left text-xl text-tide-blue">Enter your code.</h1>
        <p className="mt-2 text-left text-xs text-gray-secondary">
          Didn&apos;t get it? <a href="#">Send another code.</a>
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <TextInput
          control={control}
          name="otp"
          label="Temporary code"
          autoComplete="one-time-code"
          description={`Code is valid for 15 minutes.`}
        />
        <div className="mt-6 flex gap-4">
          <Button className="w-full" variant="secondary">
            Cancel
          </Button>
          <SubmitButton
            text="Sign In"
            submittingText="Signing in..."
            isSubmitting={isSubmitting}
            className="w-full"
          />
        </div>
      </form>
    </div>
  );
};
