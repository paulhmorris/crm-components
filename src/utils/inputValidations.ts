import { ValidatorFunction } from "types";

/** Allows setting multiple validators on one field */
export const validateMultiple =
  (...validators: ValidatorFunction[]) =>
  (value: string) =>
    validators.reduce(
      (error: unknown, validator: ValidatorFunction) =>
        error || validator(value),
      undefined
    );

export const required: ValidatorFunction = (value) =>
  value ? undefined : "This field is required";

export const mustBeNumber: ValidatorFunction = (value) => {
  if (!value) return value;
  if (typeof value !== "number") return "Value must be a number";
  return undefined;
};

export const mustBeAlphanumeric: ValidatorFunction = (value) => {
  const isTextOnly = new RegExp("^[a-zA-Z0-9_ ]*$");
  return isTextOnly.test(value)
    ? undefined
    : "Only letters and numbers allowed";
};

export const mustBePhoneNumber: ValidatorFunction = (value) => {
  if (!value) return value;
  const cleanedValue = value.replace(/[! @#$%^&*(),.-]/g, "");
  if (cleanedValue && cleanedValue.length < 10) {
    return "Phone number must be at least ten digits";
  }

  return undefined;
};

export const isValidZip: ValidatorFunction = (value) => {
  const isValid = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value);
  return isValid;
};
