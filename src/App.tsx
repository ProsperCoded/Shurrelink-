import { createContext, useContext, useEffect, useState } from "react";
import "./styles/App.scss";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { ExchangeRates } from "./types";
import { getExchangeRates } from "./libs/utils";

export const ExchangeRatesContext = createContext<any>([]);
function App() {
  const [exchangeRates, setExchangeRates] = useState<any>([]);
  // loaders
  useEffect(() => {
    getExchangeRates().then((result) => {
      setExchangeRates(result);
    });
  }, []);
  return (
    <Box className="app">
      <ExchangeRatesContext.Provider value={exchangeRates}>
        <Outlet />
      </ExchangeRatesContext.Provider>
    </Box>
  );
}

export default App;
