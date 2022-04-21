import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <div class="header_wrap">
        <div class="header_item">Home</div>
        <div class="header_item">About</div>
      </div>
    </nav>
  );
}

export default Header;
