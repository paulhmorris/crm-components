import { useFormContext, UseFormReturn } from "react-hook-form";

type FormConnectorProps = {
  children: (ctx: UseFormReturn) => JSX.Element;
};
export const FormConnector = ({ children }: FormConnectorProps) => {
  const methods = useFormContext();
  return children({ ...methods });
};
