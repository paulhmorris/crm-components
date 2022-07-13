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
