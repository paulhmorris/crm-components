import { AccountHeaderProps } from "components/Account/AccountHeader";

export const personalDetails = {
  fullName: "Johnny Rocket",
  email: "jrocket@cnetwork.com",
  phone: "6873091032",
  address: "123 Main St, Reno NV 12345",
  group: {
    id: 3,
    name: "Cartoon Network",
  },
  autoRenew: true,
  onHold: false,
};

export const mockLinkedAccounts = [
  {
    id: 1,
    name: "Marcellus Abernathy",
    type: "Student",
    phone: "4496760563",
    email: "Hulda41@gmail.com",
  },
  {
    id: 2,
    name: "Jennifer Abernathy",
    type: "Student",
    phone: "4496760555",
    email: "JAbernaThy41@gmail.com",
  },
];

export const mockAccountData = {
  phone: "5555555555",
  detergent: "free and gentle",
  balance: -150.0,
  email: "guest@gmail.com",
  starch: "medium starch",
  creditBalance: 10.0,
  planTitle: "Perpetual 20lbs",
  serviceLocation: "Dale Henderson Hall",
  autoPayIsOn: true,
};

export const mockAccountCoupons = [
  { id: 1, code: "NATFLY15", description: "NATFLY15" },
  { id: 2, code: "spotless15", description: "15% off next order" },
  { id: 3, code: "SORRY15DC", description: "SORRY15DC" },
  { id: 4, code: "ICRDC20MAR", description: "ICRDC20MAR" },
];

export const mockBags = [
  {
    id: 1,
    typeId: 1,
    barCode: "10928301",
    hex: "#000",
    colorName: "black",
    lastScanned: "2022-04-26T02:40:17Z",
  },
  {
    id: 2,
    typeId: 2,
    barCode: "4798241",
    hex: "#0d9f3f",
    colorName: "green",
    lastScanned: "2022-04-27T18:10:48Z",
  },
  {
    id: 3,
    typeId: 3,
    barCode: "8023948",
    hex: "#EB43B2",
    colorName: "pink",
    lastScanned: "2022-04-10T21:41:54Z",
  },
  {
    id: 4,
    typeId: null,
    barCode: "2734987",
    hex: "#AC3DB9",
    colorName: "purple",
    lastScanned: null,
  },
];

export const mockUser = {
  name: "Bill Esquire",
  availableRefundAmount: 50.0,
  availableCreditAmount: 50.0,
};

export const mockAccount: AccountHeaderProps = {
  fullName: "Johnny Rocket",
  createDate: new Date(2020, 4, 1).toDateString(),
  groupId: 42,
  groupName: "Cartoon Network",
  isLead: true,
  acceptTerms: false,
};

export const mockPaymentMethods = [
  {
    id: 1,
    cardType: "visa",
    lastFour: "1111",
    expiration: new Date(2024, 10, 20).toISOString(),
    isDefault: true,
    paymentProcessors: ["Clearent"],
  },
  {
    id: 2,
    cardType: "mastercard",
    lastFour: "1234",
    expiration: new Date(2024, 10, 20).toISOString(),
    isDefault: false,
    paymentProcessors: ["Clearent", "Worldpay"],
  },
  {
    id: 3,
    cardType: "visa",
    lastFour: "7890",
    expiration: new Date(2024, 10, 20).toISOString(),
    isDefault: false,
    paymentProcessors: ["Clearent"],
  },
];
