import React from "react";
import GetStarted from "../utils/GetStarted";
import "./Nav.scss";
enum Nav {
  home,
  about,
  locations,
  contact,
  offers,
}
export default function Navbar() {
  const [active, setActive] = React.useState<Nav>(Nav.home);
  return (
    <div className="nav">
      <div className="flex w-full items-end justify-around">
        <div className="logo-container">
          <span className="logo"></span>
        </div>
        <ul className="nav--links">
          <li
            className={active === Nav.home ? "active" : ""}
            onClick={() => {
              setActive(Nav.home);
            }}
          >
            <a href="/#hero">Home</a>
          </li>
          <li
            className={active === Nav.about ? "active" : ""}
            onClick={() => {
              setActive(Nav.about);
            }}
          >
            <a href="/#about">About</a>
          </li>
          <li
            className={active === Nav.locations ? "active" : ""}
            onClick={() => {
              setActive(Nav.locations);
            }}
          >
            <a href="/#locations">Locations</a>
          </li>
          <li
            className={active === Nav.offers ? "active" : ""}
            onClick={() => {
              setActive(Nav.offers);
            }}
          >
            <a href="/">Offers</a>
          </li>
          <li
            className={active === Nav.contact ? "active" : ""}
            onClick={() => {
              setActive(Nav.contact);
            }}
          >
            <a href="/">Contact</a>
          </li>
        </ul>
        <div>
          <GetStarted />
        </div>
      </div>
    </div>
  );
}
