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
          ? "bg-success"
          : variant === "warning"
          ? "bg-warning"
          : variant === "error"
          ? "bg-error"
          : "bg-blue-200",
        "grid min-h-[68px] w-full place-items-center text-white",
        props.className
      )}
    >
      <p
        className={classNames(
          variant === "warning" && "text-primary",
          "text-base font-bold"
        )}
      >
        {message}
      </p>
    </div>
  );
};
