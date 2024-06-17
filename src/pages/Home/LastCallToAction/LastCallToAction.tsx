import React from "react";
import "./LastCallToAction.scss";
import CallToAction from "../../../components/utils/GetStarted";
function LastCallToAction() {
  return (
    <div className="last-call-to-action">
      <div className="content space-y-4">
        <p className="section-highlight text-center ">START YOUR ADVENTURE</p>
        <p className="section-heading text-center text-light">
          Let's Explore This World
        </p>
        <p className="text-light font-serif text-xl italic">
          "Life Is Meant For Good Friends And Great Adventures"
        </p>
        <div className="py-8">
          <CallToAction variant="contained" text="Book Here" />
        </div>
      </div>
    </div>
  );
}

export default LastCallToAction;
