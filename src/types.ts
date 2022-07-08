import { Dispatch, SetStateAction } from "react";

/** A function that's passed into the validate property on a react-final-form input */
export type ValidatorFunction = (value: string) => boolean | string | undefined;

/** Props for modals */
export type ModalProps = {
  /** Controls rendering of the modal */
  isOpen: boolean;
  /** Callback for the Modal to close itself */
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
};
