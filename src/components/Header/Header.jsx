import React, { useState, useEffect } from "react";
import "../Header/Header.css";
import bars from "../../assets/bars.png";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [color, setColor] = useState(false);
  const handleClick = () => {
    if (menu === false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setColor(true) : setColor(false);
    });
  });
  return (
    <div className={`container ${color ? "color" : ""}`}>
      <h2 className="Logo">SKILLEX</h2>
      <img className="bars" src={bars} onClick={handleClick} alt="" />
      <ul className={menu ? "menuu" : ""}>
        <li>Home</li>
        <li>About</li>
        <li>Courses</li>
        <li>Teacher</li>
        <li>Contact</li>
      </ul>
      <button className="signup">Sign Up</button>
    </div>
  );
};

export default Header;
