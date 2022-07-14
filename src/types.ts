import { ComponentPropsWithoutRef } from "react";
import { UseFieldConfig } from "react-final-form";

/** A function that's passed into the validate property on a react-final-form input */
export type ValidatorFunction = (value: string) => boolean | string | undefined;

export type DetergentType = "normal" | "free and gentle";

export type StarchType =
  | "no starch"
  | "light starch"
  | "medium starch"
  | "heavy starch"
  | "cowboy";

export type BusinessUnit =
  | "Procter & Gamble"
  | "Tide Dry Cleaners"
  | "Tide University Laundry"
  | "Tide Cleaners";

export type SubmarketType = "Campus" | "Business Park";

/** Guest Profile - personal details tab */
export interface PersonalDetailsProps {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  group: {
    id: number;
    name: string;
  };
  autoRenew: boolean;
  onHold: boolean;
}

// C O M P O N E N T S //
export interface RadioProps extends ComponentPropsWithoutRef<"input"> {
  name: string;
  value: string | number;
  label: string;
  fieldProps?: UseFieldConfig<string>;
}

export interface CheckboxProps extends ComponentPropsWithoutRef<"input"> {
  name: string;
  label?: string;
  fieldProps?: UseFieldConfig<string>;
}

/** Options for order tags */
export type OrderPillType = "dryClean" | "washFold" | "ticket";
/** Options for order statuses */
export type OrderPillStatus = "request" | "active" | "finished" | "canceled";

export interface OrderPillProps extends ComponentPropsWithoutRef<"div"> {
  /** Order text e.g. "O-57693". Not needed for `request` or `canceled` statuses */
  text?: string;
  /** Order type that controls styles. Will show "WF" or "DC" in request and canceled statuses */
  pillType: OrderPillType;
  /** Order status that controls styles. Ticket pills have no status */
  status?: OrderPillStatus;
}
