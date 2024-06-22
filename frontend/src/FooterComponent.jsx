// Footer.js
import React from "react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import "./Footer.css"; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3 className="orange">About</h3>
        <ul>
          <li>Careers</li>
          <li>Ios</li>
        </ul>
        <div className="icons">
          <BsDribbble className="orange" />
        </div>
      </div>
      <div className="footer-section">
        <h3 className="orange">Contact Us</h3>
        <ul>
          <li>Facebook</li>
          <li>LinkedIn</li>
        </ul>
        <div className="icons">
          <BsFacebook className="orange" />
          <BsInstagram className="orange" />
        </div>
      </div>
      <div className="footer-section">
        <h3 className="orange">BrandCenter</h3>
        <ul>
          <li>Blog</li>
          <li>Services</li>
        </ul>
        <div className="icons">
          <BsGithub className="orange" />
          <BsTwitter className="orange" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
