import React from "react";
import Card from "./Card";
import data from "./data/data.json";
import "./css/card.css";

const CardDeck = () => {
  return (
    <div className="card-container">
      {data.map((pokemon, index) => (
        <Card key={index} data={pokemon} />
      ))}
    </div>
  );
};

export default CardDeck;
