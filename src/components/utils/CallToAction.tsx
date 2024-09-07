import React from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
// import { Button } from "@mui/joy";
import { Button } from "@mui/material";

const CallToAction = React.memo(
  ({ variant, text , color}: { variant: "outlined" | "contained"; text: string, color?:"primary"|"secondary" }) => {
    return (
      <div className="cta">
        <Button
          color={color || "primary"}
          variant={variant}
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
            {text} <TrendingFlatIcon />
          </span>
        </Button>
      </div>
    );
  }
);
export default CallToAction;
