import React from "react";
import "./FAQs.scss";
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
} from "@mui/joy";
// import { Accordion, AccordionDetails } from "@mui/material";
function FAQs() {
  return (
    <div className="FAQs">
      <AccordionGroup size="lg">
        <Accordion>
          <AccordionSummary>First accordion</AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Second accordion</AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Third accordion</AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </div>
  );
}

export default FAQs;
