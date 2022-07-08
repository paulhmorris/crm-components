export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(" ");
}

export const normalizeNumber = (value: string): string => {
  if (!value) return value;
  return value.replace(/[^\d]/g, "");
};

export const formatCurrency = (value: number, decimals: 0 | 2): string => {
  const decimalPlaces = decimals ? decimals : value % 1 !== 0 ? 2 : 0;
  const formattedValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(value);

  return formattedValue;
};
