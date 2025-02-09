import { Metadata } from "next";
import GamePage from '@/ui/GamePage'
import Head from "next/head";

export const metadata:Metadata = {
  title: "Game",
  description: "Game page of Dice Game"
}

const Game = () => {
  return (
    <>
    <Head>
    {[1, 2, 3, 4, 5, 6].map((num) => {
            return (
              <link rel="preload" href={`/images/dice/dice_${num}.png`} key={num} /> 
            );
          })}
    </Head>
      <GamePage />
    </>
  );
};

export default Game;
