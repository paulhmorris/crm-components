import formatStringByPattern from "format-string-by-pattern";
import { phoneMask } from "./masks";

/** Combines multiple class strings into one. Separate by comma */
export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Removes any non-numeric character from a string - useful for HTML inputs */
export const normalizeNumber = (value: string): string => {
  if (!value) return value;
  return value.replace(/[^\d]/g, "");
};

/** Formats an int or float as USD with an optional decimal argument */
export const formatCurrency = (value: number, decimals?: 0 | 2): string => {
  const decimalPlaces = decimals ? decimals : value % 1 !== 0 ? 2 : 0;
  const formattedValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(value);

  return formattedValue;
};

export const formatPhone = (phoneNumber: string) => {
  if (!phoneNumber) return "";
  if (phoneNumber.length > 10) {
    phoneNumber = phoneNumber.slice(1);
  }
  return formatStringByPattern(phoneMask, normalizeNumber(phoneNumber));
};

export const getAutopayStatus = (status: boolean): string =>
  status ? "On" : "Off";

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
