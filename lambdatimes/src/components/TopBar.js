import React from "react";
import styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

// const TopBar = () => {
//   return (
//     <div className="top-bar">
//       <div className="container">
//         <div className="container-left">
//           <span>TOPICS</span>
//           <span>SEARCH</span>
//         </div>
//         <div className="container-center">
//           <span>GENERAL</span>
//           <span>BROWNBAG</span>
//           <span>RANDOM</span>
//           <span>MUSIC</span>
//           <span>ANNOUNCEMENTS</span>
//         </div>
//         <div className="container-right">
//           <span>LOG IN</span>
//         </div>
//       </div>
//     </div>
//   );
// };

const BarTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const BarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const LeftSpan = styled.div`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
  cursor: pointer;
  margin-right: 5%;
  margin-right: 0;
  text-decoration: underline;
`;

const CenterSpan = styled.div`
  cursor: pointer;
  margin-right: 5%;
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
`;

const RightSpan = styled.div`
  cursor: pointer;
`;

const TopBar = () => {
  return (
    <BarTop>
      <BarContainer>
        <LeftContainer>
          <LeftSpan>TOPICS SEARCH</LeftSpan>
        </LeftContainer>
        <CenterContainer>
          <CenterSpan>GENERAL BROWNBAG RANDOM MUSIC ANNOUNCEMENTS</CenterSpan>
        </CenterContainer>
        <RightContainer>
          <RightSpan>LOG IN</RightSpan>
        </RightContainer>
      </BarContainer>
    </BarTop>
  );
};

export default TopBar;
