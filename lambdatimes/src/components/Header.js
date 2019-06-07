import React from "react";
import HeaderStyle from "./Styling/HeaderStyle";
import DateStyle from "./Styling/DateStyle";
import TempStyle from "./Styling/TempStyle";
import TimesStyle from "./Styling/TimesStyle";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderStyle>
      <DateStyle>SMARCH 32, 2018</DateStyle>
      <TimesStyle>Lambda Times</TimesStyle>
      <TempStyle>98°</TempStyle>
    </HeaderStyle>
  );
};

export default Header;
