import { SubmitButton } from "components/SubmitButton";
import { useForm } from "react-hook-form";
import { sleep } from "utils/helpers";
import { TextInput } from "./TextInput";

export const SignInForm = () => {
  const { control, handleSubmit, formState } = useForm({ mode: "onTouched" });
  const { isSubmitting } = formState;
  const onSubmit = async () => {
    await sleep(2000);
    console.log("Logged in");
  };

  return (
    <div className="mx-auto flex w-full max-w-xs flex-col items-center justify-between">
      <div className="mb-10 text-center">
        <h1 className="text-xl text-tide-blue">Go ahead, login.</h1>
        <p className="mt-1 text-xs text-secondary">
          Welcome to the <em>new</em> Tony Starch 🚀
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <TextInput
          control={control}
          name="email"
          label="Email"
          autoComplete="email"
        />
        <TextInput
          control={control}
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <div className="mt-6">
          <SubmitButton
            text="Sign In"
            submittingText="Signing in..."
            isSubmitting={isSubmitting}
            className="w-full"
          />
          <a className="mt-2 block text-center text-xs" href="#">
            Forgot your password?
          </a>
        </div>
      </form>
    </div>
  );
};
