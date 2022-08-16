import formatStringByPattern from "format-string-by-pattern";
import { SelectOptionProps } from "types";
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

export const formatNumber = (value: number): string => {
  return value.toLocaleString("en-US");
};

export const formatPhone = (phoneNumber: string) => {
  if (!phoneNumber) return "";
  if (phoneNumber.at(0) === "+") {
    phoneNumber = phoneNumber.slice(2);
  }
  return formatStringByPattern(phoneMask, normalizeNumber(phoneNumber));
};

export const getAutopayStatus = (status: boolean): string =>
  status ? "On" : "Off";

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/** Converts an array of objects into a format ready for the Select component
 * @param {string} optionValue - the key to use for the SelectOption value
 * @param {string} optionsLabel - the key to use for the SelectOption label
 */
export const convertArrayToSelectOptions = (
  array: { [key: string]: string | number }[],
  optionValue: string | number,
  optionLabel: string
): SelectOptionProps[] => {
  return array.map((object) => {
    return {
      value: object[optionValue].toString(),
      label: object[optionLabel].toString(),
    };
  });
};
