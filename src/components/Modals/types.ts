export type OrderRequestFormValues = {
  orderType: string;
  lockerNumber: number;
};

export type PersonalDetailsFormValues = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

export type LinkedAccountFormValues = {
  guestProfileUrl: string;
  name: string;
  phone: string;
  email: string;
  relationshipType: string;
};

export type AddCouponFormValues = {
  coupon: string;
};

export type InternalNoteFormValues = {
  internalNote: string;
};

export type GuestNoteFormValues = {
  guestNote: string;
};

export type ActivateBagFormValues = {
  barcode: string;
};
