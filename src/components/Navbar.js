import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <div class="navDiv">
      <ul>
        <li class="navLi">
          <a href="#home">Home</a>
        </li>
        <li class="navLi">
          <a href="#about">About</a>
        </li>
        <li class="navLi">
          <a href="#project">Project</a>
        </li>
        <li class="navLi">
          <a href="achievement">Achievement</a>
        </li>
        <li class="navLi">
          <a href="language">Language</a>
        </li>
      </ul>
    </div>
  );
}

Navbar.propTypes = {
  name: PropTypes.string,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  name: "your title here",
  about: "About here",
};
