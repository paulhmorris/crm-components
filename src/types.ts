/** A function that's passed into the validate property on a react-final-form input */
export type ValidatorFunction = (value: string) => boolean | string | undefined;
