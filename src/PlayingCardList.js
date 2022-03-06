import React, { useState } from "react";
import uuid from "uuid";
// import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import { useAxios } from "./hooks";
import { formatCard } from './helpers';

/* Renders a list of playing cards.
 * Can also add a new card at random. */

// function CardTable() {
//   const [cards, setCards] = useState([]);
//   const addCard = async () => {
//     const response = await axios.get(
//       "https://deckofcardsapi.com/api/deck/new/draw/"
//     );
//     setCards(cards => [...cards, { ...response.data, id: uuid() }]);
//   };

//added here
const CardTable = ()=> {
  const [cards, addCard, clearCards] = useAxios(
    "cards",
    "https://deckofcardsapi.com/api/deck/new/draw/"
  );
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        {/* <button onClick={addCard}>Add a playing card!</button> */}

        {/* added here/replace addCard to formatCard */}
        <button onClick={() => addCard(formatCard)}>Add a playing card!</button>
        <button onClick={clearCards}>Clear the table</button>
      </div>
      <div className="PlayingCardList-card-area">
        {/* {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image}*/}
          {/* replace cardData to card */}
          
          {cards.map(card => (
          <PlayingCard key={card.id} front={card.image}
           /> 

        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
