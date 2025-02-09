import { Metadata } from "next";
import GamePage from '@/ui/GamePage'

export const metadata:Metadata = {
  title: "Game",
  description: "Game page of Dice Game"
}

const Game = () => {
  return (
    <GamePage />
  );
};

export default Game;
