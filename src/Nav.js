import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import netflix_logo from "./netflix_logo.jpg";
import netflix_avatar from "./Netflix-avatar.png";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        onClick={() => navigate("/")}
        className="nav_logo"
        src={netflix_logo}
        alt="Netflix Logo"
      />
      <img
        onClick={() => navigate("/profile")}
        className="nav_avatar"
        src={netflix_avatar}
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
