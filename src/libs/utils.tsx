import { CurrencyKeyType, ExchangeRates } from "../types";

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
  return convertedAmount;
}
