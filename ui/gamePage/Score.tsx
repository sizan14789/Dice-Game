import { motion } from 'framer-motion'

interface ScoreProps {
  handlePick: (num:number) => void;
  score: number;
  picked: number | undefined;
  warning:boolean,
}

const Score:React.FC<ScoreProps> = ({score, warning, handlePick, picked}) => {
  return (
    <header className="flex flex-col lg:flex-row lg:justify-between lg:m-6 gap-8">
      <motion.div className="flex flex-col items-center"
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1,
        transition:{
          delay:1.3
        }
      }}>
        <h2 className="text-6xl">{score}</h2>
        <h1 className="font-bold text-xl">Total Score</h1>
      </motion.div>
      <div className="flex flex-col gap-5 items-center">
        {warning ? (
          <motion.p className="text-red-800"
          initial={{
            scale: 0
          }}
          whileInView={{
            scale:1
          }}
          >Pick a number before rolling</motion.p>
        ) : (
          <></>
        )}
        <div className="flex gap-5 flex-wrap">
          {[1, 2, 3, 4, 5, 6].map((num) => {
            return (
              <motion.div
                key={num}
                className={`min-h-16 min-w-16 md:min-h-20 md:min-w-20  border-2 border-black grid place-items-center rounded-sm cursor-pointer ${
                  num === picked ? "bg-black text-white" : ""
                }`}
                onClick={() => handlePick(num)}
                initial={{
                  opacity: 0,
                  x: -10
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: num*0.1
                  }
                }}
                whileHover={{
                  scale: 1.1
                }}
                whileTap={{
                  scale: 0.9
                }}
              >
                {num}
              </motion.div>
            );
          })}
        </div>
        <motion.h1 className="lg:ml-auto"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1,
          transition:{
            delay:1.3
          }
        }}
        >Select Number</motion.h1>
      </div>
    </header>
  );
};

export default Score;
