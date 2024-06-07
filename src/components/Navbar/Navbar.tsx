import React from "react";
import logoAndLabel from "./../../assets/logo_and_label.webp";
export default function Navbar() {
  return (
    <div>
      <div className="flex w-full">
        <span className="logo"></span>
        <ul className="nav-links text-dark font-bold list-none flex gap-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Locations</a>
          </li>
          <li>
            <a href="/">Offers</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
