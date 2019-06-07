import React from "react";
import HeaderStyle from "./Styling/HeaderStyle";
import DateStyle from "./Styling/DateStyle";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderStyle>
      <DateStyle>SMARCH 32, 2018</DateStyle>
      <h1>Lambda Times</h1>
      <span className="temp">98°</span>
    </HeaderStyle>
  );
};

export default Header;
