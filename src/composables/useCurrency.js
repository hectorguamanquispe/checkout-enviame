import { objectCurrency } from "../helpers/objectCurrency";

export const useCurrency = () => {
  const setCurrency = (value, currency) => {
    const locale = objectCurrency[currency];
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
    }).format(value);
  };
  return {
    setCurrency,
  };
};
