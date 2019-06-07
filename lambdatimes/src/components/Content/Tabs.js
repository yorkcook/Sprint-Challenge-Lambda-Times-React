import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";

const Tabs = props => {
  // console.log(props);
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(() => (
          <Tab
            changeSelected={props.changeSelected}
            selectedTab={props.tabData}
            tabs={props.tabs}
          />
        ))}

        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  selectedTab: PropTypes.array.isRequired
};
export default Tabs;
