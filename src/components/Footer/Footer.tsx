import React from "react";
import XIcon from "@mui/icons-material/X";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import BusinessIcon from "@mui/icons-material/Business";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import CallToAction from "../utils/CallToAction";
import { Instagram, MailLock, MailOutlined } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Divider } from "@mui/material";
import LastCallToAction from "../../pages/Home/LastCallToAction/LastCallToAction";
function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="content text-sm lg:text-base">
        <div>
          <div className="logo-container w-[7rem] h-[4rem] flex flex-col shrink-0 mb-2">
            <div className="logo"></div>
          </div>
          <p className="my-4 ml-2 font-serif italic font-semibold text-sm text-slate-700">
            Let the Traveler In You Fly With Us
          </p>
          <div className="social-link mt-2 flex gap-2">
            <a className="" href="#">
              <FacebookOutlinedIcon color="primary" fontSize="small" />
            </a>
            <a className="" href="#">
              <XIcon color="primary" fontSize="small" />
            </a>
            <a className="" href="#">
              <MailOutlined color="primary" fontSize="small" />
            </a>
            <a className="" href="#">
              <Instagram color="primary" fontSize="small" />
            </a>
          </div>
        </div>
        <div>
          <h2 className=" font-bold mb-3">Our Address</h2>
          <ul className="font-secondary flex flex-col gap-2">
            <li className="flex gap-2">
              <BusinessIcon color="primary" />
              <span>26, Oba Akinjobi way, Ikeja GRA Lagos</span>
            </li>
            <li className="flex gap-2">
              <PermPhoneMsgIcon color="primary" />
              <span>+234-803-2000-432</span>
            </li>
            <li className="flex gap-2">
              <WhatsAppIcon color="primary" />
              <span>+234-803-2000-432</span>
            </li>
            <li className="flex gap-2">
              <MailOutlined color="primary" />
              <span>shurrelink@gmail.com</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-secondary font-bold mb-3">Quick Links</h2>
          <ul className="font-secondary flex flex-col gap-2">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Direct Message</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-secondary font-bold mb-3">Newsletter</h2>
          <div className="flex items-center gap-1">
            <input className="input-box flex-grow" />
            <MailLock />
          </div>
          <div className="flex justify-center mt-4">
            <CallToAction
              text="Subscribe"
              variant="outlined"
              color="secondary"
            />
          </div>
        </div>
      </div>
      <Divider />
      <h4 className="font-sans items-center text-center w-full font-semibold tracking-wider">
        Copyright @2024
      </h4>
    </div>
  );
}

export default Footer;
