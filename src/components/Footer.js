import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Twitter, Facebook, Instagram } from "react-feather";

function Footer() {
  return (
    <div>
      <footer className="footer-container">
        <div className="footer-links">
          <ul>
            <li>
              <Link to={"/"}>Drops</Link>
            </li>
            <li>
              <Link to={"/"}>Marketplace</Link>
            </li>
            <li>
              <Link to={"/"}>My Collection</Link>
            </li>
            <li>
              <Link to={"/"}>Challenges</Link>
            </li>
            <li>
              <Link to={"/"}>Settings</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to={"/"}>About FIFA+ Collect</Link>
            </li>
            <li>
              <Link to={"/"}>FAQ</Link>
            </li>
            <li>
              <Link to={"/"}>Support</Link>
            </li>
            <li>
              <Link to={"/"}>Roadmap</Link>
            </li>
          </ul>
        </div>
        <div className="footer-logo">
          <div className="footer-logo-text">Powered By</div>
          <div className="footer-logo-image">
            <img
              src="https://collect.fifa.com/images/logos/algorand.svg"
              alt="Brand Logo"
            />
          </div>
          <div className="algorand-social">
            <span></span>
            <Twitter />
            <span></span>
            <Facebook />
            <span></span>
            <Instagram />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
