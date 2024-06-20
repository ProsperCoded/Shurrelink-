import { acceptedCurrencies } from "../config";
import {
  CurrencyKeyType,
  CurrencyType,
  ExchangeRates,
  LocationType,
} from "../types";

export function numberWithCommas(str: string | number) {
  if (typeof str === "number") {
    str = str.toString();
  }
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Define the API URL and your API key
const API_KEY = "224e7a309144398dfcdd9d61"; // Replace with your actual API key
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/NGN`;

// Define the currency codes
const NGN = "NGN";
const EUR = "EUR";
const USD = "USD";

interface ApiResponse {
  conversion_rates: ExchangeRates;
}

// export async function getExchangeRates(): Promise<ExchangeRates> {
//   const response = await fetch(`${API_URL}?apikey=${API_KEY}`);
//   if (!response.ok) {
//     throw new Error("Failed to fetch exchange rates");
//   }
//   const data: ApiResponse = await response.json();
//   return data.data;
// }
export async function getExchangeRates(): Promise<ExchangeRates> {
  const response = await fetch(`${API_URL}?apikey=${API_KEY}`);
  if (!response.ok) {
    throw new Error("Failed to fetch exchange rates");
  }
  const data: ApiResponse = await response.json();
  return data.conversion_rates;
}
export function convertFromNaira(
  amount: number,
  targetCurrency: CurrencyKeyType,
  ExchangeRates: ExchangeRates
) {
  const rates = ExchangeRates;
  const nairaRate = rates[NGN];
  const targetRate = rates[targetCurrency];

  if (!nairaRate || !targetRate) {
    throw new Error(`Exchange rate for ${targetCurrency} not available`);
  }

  // Convert from NGN to the target currency
  const convertedAmount = Math.ceil(amount * targetRate);
  console.log("converting currency of ", targetCurrency, convertedAmount);
  return convertedAmount;
}
export function getMinPriceAndMaxPrice(locations: LocationType[]) {
  // This method is to determine the min price, and maximum price of available locations
  if (locations.length === 0) {
    return { min: 0, max: 0 };
  }
  let { priceRange } = locations.reduce(
    (value, accumulator) => {
      value.priceRange.start;
      let newValue = { ...accumulator };
      if (value.priceRange.start < accumulator.priceRange.start) {
        newValue.priceRange.start = value.priceRange.start;
      }
      if (value.priceRange.end > accumulator.priceRange.end) {
        newValue.priceRange.end = value.priceRange.end;
      }
      return newValue;
    },
    {
      priceRange: { start: locations[0].priceRange.start, end: 0 },
    }
  );
  return { min: priceRange.start, max: priceRange.end };
}
export function convertPrices(
  currency: CurrencyType | undefined,
  location: { priceRange: { start: number; end: number } },
  exchangeRates: ExchangeRates
) {
  let start;
  let end;
  if (currency === acceptedCurrencies[1].USD) {
    start =
      currency +
      numberWithCommas(
        convertFromNaira(location.priceRange.start, "USD", exchangeRates)
      );
    end =
      currency +
      numberWithCommas(
        convertFromNaira(location.priceRange.end, "USD", exchangeRates)
      );
  } else if (currency === acceptedCurrencies[2].EUR) {
    start =
      currency +
      numberWithCommas(
        convertFromNaira(location.priceRange.start, "EUR", exchangeRates)
      );
    end =
      currency +
      numberWithCommas(
        convertFromNaira(location.priceRange.end, "EUR", exchangeRates)
      );
  } else {
    start = currency + numberWithCommas(location.priceRange.start);
    end = currency + numberWithCommas(location.priceRange.end);
  }
  return { start, end };
}
