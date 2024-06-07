import React from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { Button, IconButton } from "@mui/material";

const GetStarted = React.memo(() => {
  return (
    <div className="cta">
      <Button
        color="primary"
        variant="outlined"
        sx={{
          px: 2,
          py: 1,
          borderRadius: "100px",
          fontWeight: "800",
          borderWidth: "2px !important",
          "& svg": {
            transition: "transform 200ms linear",
          },
          "& :hover svg": {
            transform: "translateX(5px)",
          },
        }}
      >
        <span>
          Get Started <TrendingFlatIcon />
        </span>
      </Button>
    </div>
  );
});
export default GetStarted;
