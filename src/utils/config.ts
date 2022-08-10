import { UseFormProps } from "react-hook-form";

export const modalFormConfig: Pick<UseFormProps, "mode" | "shouldUnregister"> =
  {
    mode: "onTouched",
    shouldUnregister: true,
  };
