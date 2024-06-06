import { useState } from "react";
import "./styles/App.scss";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Box className="app">
      <Navbar />
      <Home />
    </Box>
  );
}

export default App;
