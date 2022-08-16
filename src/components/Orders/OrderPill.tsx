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
        "inline-flex h-6 min-w-[66px] max-w-min items-center justify-center whitespace-nowrap rounded-sm border px-2 text-xs font-bold leading-3 shadow-sm",
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
          "border-orange text-orange bg-transparent",
        // W&F Active
        pillType === "washFold" &&
          status === "active" &&
          "border-orange bg-orange text-white",
        // Canceled, finished, tickets
        status === "request"
          ? "bg-white"
          : status === "canceled"
          ? "border-gray-200 bg-gray-200 text-gray-300"
          : status === "finished"
          ? "border-gray-300 bg-gray-300 text-gray-secondary"
          : pillType === "ticket" &&
            "border-blue-primary bg-blue-primary text-white"
      )}
    >
      <span>
        {status === "request" || status === "canceled" ? defaultText : text}
      </span>
    </div>
  );
};
