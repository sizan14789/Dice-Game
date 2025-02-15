import { motion } from "framer-motion";

interface RulesProps {
  rules: boolean;
}

const Rules: React.FC<RulesProps> = ({ rules }) => {
  return (
    <footer
      className={`mx-auto w-80 transition-all overflow-hidden ${
        rules ? "h-[55rem]" : "h-0"
      }`}
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold mb-5">How to play dice game</h2>
        <ol className="flex flex-col gap-4">
          <ul>
            <h1 className="font-bold">1. Select Your Number:</h1>
            <p>
              -- Choose any number between 1 and 6. This number is your guess
              for the upcoming dice roll.
            </p>
          </ul>
          <ul>
            <h1 className="font-bold">2. Roll the Dice:</h1>
            <p>
              -- Click on the dice image. The dice will randomly show a number
              between 1 and 6.
            </p>
          </ul>
          <ul>
            <h1 className="font-bold" >3. Check the Outcome:</h1>
            <ul>
              <h1 className="ml-5"> a. If the dice number matches your selected number:</h1>
              <ul className="mb-3">
                <li className="ml-7">
                  -- You earn points equal to the number shown on the dice.
                  Example: If you guessed 4 and the dice rolls a 4, you get 4
                  points.
                </li>
              </ul>
              <h1 className="ml-5" >b. If the dice number does not match your guess:</h1>
              <ul>
                <li className="ml-7">-- 2 points are deducted from your score.</li>
              </ul>
            </ul>
          </ul>
          <ul>
            <h1 className="font-bold">4. Game Objective:</h1>
            <p>
              -- Try to maximize your total score by correctly predicting the dice
              outcome.
            </p>
            <p>
              -- Each round offers you a chance to gain points or lose points based
              on your guess.
            </p>
          </ul>
          <ul>
            <h1 className="font-bold">5. Continue Playing or Stop:</h1>
            <p>
              -- You can choose to play multiple rounds to increase your score.
            </p>
            <p>-- Decide when you’re done and check your final score.</p>
          </ul>
        </ol>
      </div>
    </footer>
  );
};

export default Rules;
