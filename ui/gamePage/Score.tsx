interface ScoreProps {
  handlePick: (num:number) => void;
  score: number;
  picked: number | undefined;
  warning:boolean,
}

const Score:React.FC<ScoreProps> = ({score, warning, handlePick, picked}) => {
  return (
    <header className="flex flex-col lg:flex-row lg:justify-between lg:m-6 gap-8">
      <div className="flex flex-col items-center">
        <h2 className="text-6xl">{score === 0? 0 :(score).toFixed(2)}</h2>
        <h1 className="font-bold text-xl">Total Score</h1>
      </div>
      <div className="flex flex-col gap-5 items-center">
        {warning ? (
          <p className="text-red-800">Pick a number before rolling</p>
        ) : (
          <></>
        )}
        <div className="flex gap-5 flex-wrap">
          {[1, 2, 3, 4, 5, 6].map((num) => {
            return (
              <div
                key={num}
                className={`min-h-16 min-w-16 md:min-h-20 md:min-w-20  border-2 border-black grid place-items-center rounded-sm cursor-pointer ${
                  num === picked ? "bg-black text-white" : ""
                }`}
                onClick={() => handlePick(num)}
              >
                {num}
              </div>
            );
          })}
        </div>
        <h1 className="lg:ml-auto">Select Number</h1>
      </div>
    </header>
  );
};

export default Score;
