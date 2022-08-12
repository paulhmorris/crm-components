import { ComponentPropsWithoutRef } from "react";
import { classNames } from "utils/helpers";

interface MarketCardProps extends ComponentPropsWithoutRef<"button"> {
  businessType: string;
  title: string;
}

/** Used for markets and submarkets */
export const MarketCard = ({
  businessType,
  title,
  className,
  ...props
}: MarketCardProps) => {
  return (
    <button
      {...props}
      className={classNames(
        className,
        "h-min w-64 flex-auto flex-grow-0 space-y-0.5 rounded border border-gray-300 p-6 transition-colors duration-75 hover:bg-gray-100 active:bg-gray-200/50"
      )}
      role="listitem"
    >
      <p className="text-left text-xs text-secondary">{businessType}</p>
      <p className="text-left text-base font-bold text-blue-300">{title}</p>
    </button>
  );
};
