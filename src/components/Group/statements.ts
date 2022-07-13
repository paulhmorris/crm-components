interface IStatements {
  id: number;
  date: Date;
  balance: number;
}
interface ITransactions {
  id: number;
  statementId: number;
  name: string;
  date: Date;
  balance: number;
}

export const statements: IStatements[] = [
  {
    id: 1,
    date: new Date("2022-05-01 01:34:11.933"),
    balance: 14420.65,
  },
  {
    id: 2,
    date: new Date("2022-05-02 01:34:11.933"),
    balance: 14420.65,
  },
  {
    id: 3,
    date: new Date("2022-05-03 01:34:11.933"),
    balance: 14420.65,
  },
  {
    id: 4,
    date: new Date("2022-05-04 01:34:11.933"),
    balance: 14420.65,
  },
];

export const transactions: ITransactions[] = [
  {
    id: 1,
    statementId: 1,
    name: "AccountOne",
    date: new Date("2022-05-01 01:34:11.933"),
    balance: 5250.11,
  },
  {
    id: 2,
    statementId: 1,
    name: "AccountTwo",
    date: new Date("2022-05-01 01:34:11.933"),
    balance: 3250.11,
  },
  {
    id: 3,
    statementId: 1,
    name: "AccountThree",
    date: new Date("2022-05-01 01:34:11.933"),
    balance: 7250.11,
  },
  {
    id: 4,
    statementId: 2,
    name: "AccountFour",
    date: new Date("2022-05-02 01:34:11.933"),
    balance: 7250.11,
  },
  {
    id: 5,
    statementId: 2,
    name: "AccountFive",
    date: new Date("2022-05-02 01:34:11.933"),
    balance: 2250.11,
  },
  {
    id: 6,
    statementId: 2,
    name: "AccountSix",
    date: new Date("2022-05-02 01:34:11.933"),
    balance: 5250.11,
  },
  {
    id: 7,
    statementId: 3,
    name: "AccountSeven",
    date: new Date("2022-05-03 01:34:11.933"),
    balance: 5250.11,
  },
  {
    id: 8,
    statementId: 3,
    name: "AccountEight",
    date: new Date("2022-05-03 01:34:11.933"),
    balance: 7250.11,
  },
  {
    id: 9,
    statementId: 3,
    name: "AccountNine",
    date: new Date("2022-05-03 01:34:11.933"),
    balance: 2250.11,
  },
  {
    id: 10,
    statementId: 4,
    name: "AccountTen",
    date: new Date("2022-05-04 01:34:11.933"),
    balance: 5250.11,
  },
  {
    id: 11,
    statementId: 4,
    name: "AccountEleven",
    date: new Date("2022-05-04 01:34:11.933"),
    balance: 7250.11,
  },
  {
    id: 12,
    statementId: 4,
    name: "AccountTwelve",
    date: new Date("2022-05-04 01:34:11.933"),
    balance: 2250.11,
  },
];
