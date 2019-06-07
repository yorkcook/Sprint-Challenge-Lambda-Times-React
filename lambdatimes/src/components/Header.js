import React from "react";
import styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file
const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
`;

const DateStyle = styled.div`
  margin-left: 25px;
  flex: 1;
`;

const TempStyle = styled.div`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;

const TimesStyle = styled.div`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

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
