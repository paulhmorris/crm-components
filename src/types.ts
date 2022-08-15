import {
  ComponentPropsWithoutRef,
  Dispatch,
  ReactNode,
  SetStateAction,
} from "react";
import {
  FieldValues,
  SubmitHandler,
  UseControllerProps,
  UseFormProps,
} from "react-hook-form";

export type OrderTypes = "dryClean" | "washFold";
/** A function that's passed into the validate property on a react-hook-form input */
export type ValidatorFunction = (value: string) => boolean | string | undefined;

export type DetergentType = "normal" | "free and gentle";

export type StarchType =
  | "no starch"
  | "light starch"
  | "medium starch"
  | "heavy starch"
  | "cowboy";

export interface TabDetails {
  title: string;
  route: string;
}
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

// ----------- C O M P O N E N T S ----------- //

export interface TextInputProps<T extends FieldValues>
  extends UseControllerProps<T>,
    Omit<ComponentPropsWithoutRef<"input">, "name" | "defaultValue"> {
  /** Field label. This acts as the placeholder until in focus */
  label: string;
  /** Field type. Defaults to "text" */
  type?: "text" | "password" | "email" | "number" | "tel";
  /** Optional description will show below the input. Will not be shown if the field has an error */
  description?: string;
}

export interface FormComponent extends UseFormProps {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
}

export interface TextAreaProps<T extends FieldValues>
  extends UseControllerProps<T>,
    Omit<ComponentPropsWithoutRef<"textarea">, "name" | "defaultValue"> {
  /** Field label. This acts as the placeholder until active */
  label: string;
  /** Optional description will show below the input. Will not be shown if the field has an error */
  description?: string;
}

export interface SelectProps<T extends FieldValues>
  extends UseControllerProps<T>,
    Omit<ComponentPropsWithoutRef<"button">, "name" | "defaultValue"> {
  /** Field label. This acts as the placeholder until in focus */
  label: string;
  /** Optional description will show below the input. Will not be shown if the field has an error */
  description?: string;
  /** The options to populate the select */
  options: SelectOptionProps[];
}

export interface ToggleProps<T extends FieldValues>
  extends UseControllerProps<T>,
    Omit<
      ComponentPropsWithoutRef<"button">,
      "name" | "defaultValue" | "onChange" | "value"
    > {
  label?: string;
}

export interface SelectOptionProps {
  value: string | number;
  label: string;
}

export interface RadioProps<T extends FieldValues>
  extends UseControllerProps<T>,
    Omit<ComponentPropsWithoutRef<"input">, "name" | "defaultValue"> {
  value: string | number;
  label: string;
  controllerProps?: Omit<UseControllerProps, "name">;
}

export interface CheckboxProps<T extends FieldValues>
  extends UseControllerProps<T>,
    Omit<ComponentPropsWithoutRef<"input">, "name" | "defaultValue"> {
  label?: string;
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

export interface ModalProps {
  /** Controls rendering of the modal */
  isOpen: boolean;
  /** Header */
  title: string;
  /** Optional description. Displays below the header. */
  description?: string;
  /** Width of the modal. */
  size?: "xs" | "sm" | "md" | "lg" | "full";
  /** Callback for the Modal to close itself */
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

export interface GenericModalProps {
  /** Controls rendering of the modal */
  isOpen: boolean;
  /** Callback for the Modal to close itself */
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface FormModalProps {
  /** Controls rendering of the modal */
  isOpen: boolean;
  /** Callback for the Modal to close itself */
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValues?: Record<string, any>;
}

export type Weekday = {
  fullName: string;
  initial: string;
  dayValue: number;
};

export type WeekdaySelectorActionType =
  | { type: "add"; payload: number }
  | { type: "remove"; payload: number };

export type WeekdaySelectorProps = {
  activeWeekdays: number[];
  dispatch: Dispatch<WeekdaySelectorActionType>;
  disabledDays?: number[] | null;
};
