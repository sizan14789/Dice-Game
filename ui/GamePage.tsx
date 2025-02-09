"use client";

import React, { useRef, useState } from "react";
import Score from "./gamePage/Score";
import Dice from "./gamePage/Dice";
import Rules from "./gamePage/Rules";

const Game = () => {
  // Score
  const [score, setScore] = useState<number>(0);

  // Number Picked
  const [picked, setPicked] = useState<number | undefined>();

  // Number rolled
  const diceRef = useRef<number | null>(null);

  // Rollling state
  const [isRolling, setIsRolling] = useState<boolean>(false);

  // dice roll state
  const [dice, setDice] = useState<number | undefined>(
    Math.floor(Math.random() * 6 + 1)
  );

  // one time warning state
  const [warning, setWarning] = useState<boolean>(false);

  // Rules show or hide
  const [rules, setRules] = useState<boolean>(false);

  // Number Pick function
  const handlePick = (each: number) => {
    setPicked(each);
    setWarning(false);
  };

  // dice clicked function ------- Main Function
  const handleDiceClick = () => {

    // Handling no number picked
    if (picked === undefined) {
      setWarning(true);
      return;
    }

    // Handling Double click
    if (isRolling) {
      return;
    }

    // Roll animation with score update
    setIsRolling(true);
    const roll = setInterval(() => {
      const res = Math.floor(Math.random() * 6 + 1);
      setDice(res);
      diceRef.current = res;
    }, 100);
    setTimeout(() => {
      clearInterval(roll);
      console.log(diceRef.current, "vs", picked);
      if (diceRef.current === picked) {
        setScore((prev) => prev + picked);
      } else {
        setScore((prev) => prev - picked / 6);
      }
      setIsRolling(false);
    }, 1500);
  };

  return (
    <section className="p-4 max-w-7xl mx-auto">

      <Score
        score={score}
        warning={warning}
        handlePick={handlePick}
        picked={picked}
      />

      <Dice
        handleDiceClick={handleDiceClick}
        dice={dice}
        setScore={setScore}
        setRules={setRules}
      />

      <Rules rules={rules} />
    </section>
  );
};

export default Game;
