import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [language, setLanguage] = useState("English");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/">DROPS</Link>
        </li>
        <li>
          <Link to="/">MARKETPLACE</Link>
        </li>
        <li>
          <Link to="/">MY COLLECTION</Link>
        </li>
        <li>
          <Link to="/">CHALLENGES</Link>
        </li>
        <li>
          <Link to="/">FIFA+</Link>
        </li>
      </ul>
      <div className="language-dropdown">
        <select value={language} onChange={handleLanguageChange}>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="German">German</option>
        </select>
      </div>
      <div className="signup-login">
        <button className="signup-button">Sign Up</button>
        <button className="login-button">Log In</button>
      </div>
    </nav>
  );
}

export default Navbar;
