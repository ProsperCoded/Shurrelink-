import { useState } from "react";
import "./styles/App.scss";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Box className="app">
      <Outlet />
    </Box>
  );
}

export default App;
