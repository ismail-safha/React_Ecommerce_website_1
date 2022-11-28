import React from "react";
import css from "./Footer.module.css";
import Logo from "../../assets/logo.png";
// import {
//   InboxIcon,
//   PhoneIcon,
//   LocationMarkerIcon,
//   LoginIcon,
//   UsersIcon,
//   LinkIcon,
// } from "@heroicons/react/outline";
// import {
//   InboxIcon,
//   PhoneIcon,
//   LocationMarkerIcon,
//   LoginIcon,
//   UsersIcon,
//   LinkIcon,
// } from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>IsmailShop</span>
        </div>
        {/* block 1 */}
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact US</span>
            <span className={css.pngLine}>
              {/* <LocationMarkerIcon className={css.icon} /> */}
              <span>111 north avenue Orland, FL 32801</span>
            </span>
            <span className={css.pngLine}>
              {/* <PhoneIcon className={css.icon} /> */}
              <a href="tel:+212-652-233-163">tel:+212-652-233-163</a>
            </span>
            <span className={css.pngLine}>
              {/* <InboxIcon className={css.icon} /> */}
              <a href="ismailsafha@gmail.com">ismailsafha@gmail.com</a>
            </span>
          </div>
        </div>
        {/* block 2 */}
        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              {/* <LoginIcon className={css.icon} /> */}
              Sing In
            </span>
          </div>
        </div>
        {/* block 3 */}
        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              {/* <UsersIcon className={css.icon} /> */}
              <a href="/about">
                <p>About us</p>
              </a>
            </span>
          </div>
        </div>
        {/* block 4 */}
        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              {/* <LinkIcon className={css.icon} /> */}
              <p>Safety Privacy & Terms</p>
            </span>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className={css.copyRight}>
        <span>Copyright 2022 by ismail-safah, Inc</span>
        <span>All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
