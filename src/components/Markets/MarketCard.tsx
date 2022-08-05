import { ComponentPropsWithoutRef } from "react";
import { BusinessUnit, SubmarketType } from "types";
import { classNames } from "utils/helpers";

interface MarketCardProps extends ComponentPropsWithoutRef<"button"> {
  businessType: BusinessUnit | SubmarketType;
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
        "max-w-[256px] flex-auto space-y-0.5 rounded border border-gray-200 p-6 transition-colors duration-75 hover:bg-gray-100 active:bg-gray-200/50"
      )}
      role="listitem"
    >
      <p className="text-left text-xs text-secondary">{businessType}</p>
      <p className="text-left text-base font-bold text-blue-300">{title}</p>
    </button>
  );
};
