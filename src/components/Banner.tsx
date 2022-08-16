import { ComponentPropsWithoutRef } from "react";
import { classNames } from "utils/helpers";

type BannerVariant = "success" | "warning" | "error" | "info";
interface BannerProps extends ComponentPropsWithoutRef<"div"> {
  variant: BannerVariant;
  message: string;
}

export const Banner = ({ variant, message, ...props }: BannerProps) => {
  return (
    <div
      role="alert"
      className={classNames(
        variant === "success"
          ? "bg-success/20 text-success"
          : variant === "warning"
          ? "bg-warning/50 text-gray-primary"
          : variant === "error"
          ? "bg-error/20 text-error"
          : "bg-blue-primary/10 text-blue-primary",
        "grid min-h-[50px] w-full place-items-center font-bold",
        props.className
      )}
    >
      <p>{message}</p>
    </div>
  );
};
