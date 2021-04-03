import React from "react";
import "./Header.css";

import lightning from "../../assets/images/lightning.svg";

const Header = () => {
  return (
    <div className="header">
      <img className="lightning" src={lightning} />
      <span>Flashcards</span>
    </div>
  );
};

export default Header;
