import Image from "next/image";
import Link from "next/link";

interface DiceProps {
  handleDiceClick: () => void;
  dice: number | undefined;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setRules: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dice: React.FC<DiceProps> = ({
  handleDiceClick,
  dice,
  setScore,
  setRules,
}) => {
  return (
    <main className="flex flex-col justify-center items-center my-10 lg:mt-20 gap-6">
      <figure
        className="relative cursor-pointer w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72"
        onClick={handleDiceClick}
      >
        <Image src={`/images/dice/dice_${dice}.png`} fill={true} alt="dice" priority />
      </figure>
      <h2>Click on dice to roll</h2>
      <button
        className="font-bold rounded-md w-44 py-3 bg-white border-2 border-black"
        onClick={() => setScore(0)}
      >
        Reset Score
      </button>
      <button
        className="font-bold rounded-md w-44 py-3 bg-black text-white"
        onClick={() => {
          setRules((prev) => !prev);
        }}
      >
        Show Rules
      </button>
      <Link href="/" className="cursor-pointer">
        Go back
      </Link>
    </main>
  );
};

export default Dice;
