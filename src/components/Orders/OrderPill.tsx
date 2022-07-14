import { OrderPillProps } from "types";
import { classNames } from "utils/helpers";

/** Pass the order type, optional status and text, and this component will render the associated pill */
export const OrderPill = ({ text, pillType, status }: OrderPillProps) => {
  const defaultText = pillType === "dryClean" ? "DC" : "WF";
  if (pillType === "ticket" && status) {
    throw new TypeError("Ticket order pills have no status");
  }

  return (
    <div
      className={classNames(
        "inline-flex h-6 min-w-[66px] max-w-min items-center justify-center whitespace-nowrap rounded-sm border px-2 text-xs font-bold leading-3",
        // DC Request
        pillType === "dryClean" &&
          status === "request" &&
          "border-black bg-transparent text-black",
        // DC Active
        pillType === "dryClean" &&
          status === "active" &&
          "border-black bg-black text-white",
        // W&F Request
        pillType === "washFold" &&
          status === "request" &&
          "border-tide-orange bg-transparent text-tide-orange",
        // W&F Active
        pillType === "washFold" &&
          status === "active" &&
          "border-tide-orange bg-tide-orange text-white",
        // Canceled, finished, tickets
        status === "request"
          ? "bg-transparent"
          : status === "canceled"
          ? "border-gray-200 bg-gray-200 text-gray-300"
          : status === "finished"
          ? "border-gray-300 bg-gray-300 text-secondary"
          : pillType === "ticket" && "border-tide-blue bg-tide-blue text-white"
      )}
    >
      <span>
        {status === "request" || status === "canceled" ? defaultText : text}
      </span>
    </div>
  );
};
