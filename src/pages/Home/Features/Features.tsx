import React from "react";
import "./Features.scss";
import GetStarted from "../../../components/utils/GetStarted";
import PrivacyImage from "./../../../assets/img/privacy_policy.webp";
import WhyChooseUsImage from "./../../../assets/img/why_choose_us.webp";
import HowWeDeliverImage from "./../../../assets/img/how_we_deliver.webp";
function Features() {
  return (
    <div className="features">
      <div className="content">
        <div>
          <h3 className="text-lg text-primary-dark font-bold tracking-wider">
            Welcome to Shurrlink
          </h3>
          <h1 className="text-4xl font-bold my-2 mb-3">
            LET THE TRAVELER IN YOU FLY WITH US
          </h1>
          <p className="font-secondary">
            We help Nigerians relocate and travel to established countries with
            ease, providing assistance with employment, schooling, and
            migration. We manage all procedures and handle flights for a
            seamless, hassle-free experience.
          </p>
          <div className="mt-6">
            <GetStarted variant="contained" />
          </div>
        </div>
        <div className="features__images">
          <div>
            <div>
              <img src={WhyChooseUsImage} alt="Why Choose Us Image" />
              <p className="content-hover">
                <span>Why Choose Us</span>
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={HowWeDeliverImage} alt="How We Deliver Image" />
              <p className="content-hover">
                <span>How We Deliver</span>
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={PrivacyImage} alt="Privacy Image" />
              <p className="content-hover">
                <span>Privacy Policy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
