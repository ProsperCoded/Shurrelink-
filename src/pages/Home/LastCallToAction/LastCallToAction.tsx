import React from "react";
import "./LastCallToAction.scss";
import CallToAction from "../../../components/utils/CallToAction";
function LastCallToAction() {
  return (
    <div className="last-call-to-action">
      <div className="space-y-4 content">
        <p className="text-center section-highlight">START YOUR ADVENTURE</p>
        <p className="text-center text-light section-heading">
          Let's Explore This World
        </p>
        <p className="font-serif text-light text-xl italic">
          "Life Is Meant For Good Friends And Great Adventures"
        </p>
        <div className="py-3 md:py-8">
          {/* <CallToAction variant="contained" text="Book Here" /> */}
          <button className="glass-button">Book Here</button>
        </div>
      </div>
    </div>
  );
}

export default LastCallToAction;
