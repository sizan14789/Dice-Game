import { motion } from 'framer-motion'

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
      <motion.figure
        className="relative cursor-pointer w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72"
        onClick={handleDiceClick}
        initial={{
          scale: 0
        }}
        animate={{
          scale: 1,
          transition: {
            delay: 0.1
          }
        }}
      >
        <Image src={`/images/dice/dice_${dice}.png`} fill={true} alt="dice" priority />
      </motion.figure>
      <motion.h2 
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1,
        transition:{
          delay:1.3
        }
      }}
      >Click on dice to roll</motion.h2>
      <motion.button
        className="font-bold rounded-md w-44 py-3 bg-white border-2 border-black"
        onClick={() => setScore(0)}
        whileHover={{
          scale: 1.1
        }}
        whileTap={{
          scale: 0.9
        }}
        initial={{
          y: 5,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity:1,
          transition: {
            delay: .8
          }
        }}
      >
        Reset Score
      </motion.button>
      <motion.button
        className="font-bold rounded-md w-44 py-3 bg-black text-white"
        onClick={() => {
          setRules((prev) => !prev);
        }}
        whileHover={{
          scale: 1.1
        }}
        whileTap={{
          scale: 0.9
        }}
        initial={{
          y: 5,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity:1,
          transition: {
            delay: 1
          }
        }}
      >
        Show Rules
      </motion.button>
      <Link href="/" className="cursor-pointer">
        <motion.p
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1,
          transition:{
            delay:1.3
          }
        }}
        >Go back</motion.p>
      </Link>
    </main>
  );
};

export default Dice;
