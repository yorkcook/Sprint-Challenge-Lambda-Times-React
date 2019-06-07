import React, { Component } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const Cards = props => {
  console.log(props);
  return (
    <div className="cards-container">
      {props.cards.map(card => (
        <Card card={card} />
      ))}
      {/* Using the cards prop, map over the list creating a
          new Card component for each passing the card as the only prop*/}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  cards: PropTypes.shape({
    author: PropTypes.string,
    headline: PropTypes.string,
    img: PropTypes.string,
    tab: PropTypes.string
  })
};

export default Cards;
