import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import {useFlip} from './hooks';

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  // const [isFacingUp, setIsFacingUp] = useState(true);

  //added useFlip here
  const[isFacingUp, flip] = useFlip();
  // const flipCard = () => {
  //   setIsFacingUp(isUp => !isUp);
  // };
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      // onClick={flipCard}
      //added here
      onClick ={flip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;