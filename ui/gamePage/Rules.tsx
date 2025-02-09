interface RulesProps {
  rules: boolean;
}

const Rules: React.FC<RulesProps> = ({ rules }) => {
  return (
    <footer
      className={`mx-auto w-80 transition-all overflow-hidden ${
        rules ? "h-64" : "h-0"
      }`}
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">How to play dice game</h2>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p>if you get wrong guess then 2 point will be deducted</p>
      </div>
    </footer>
  );
};

export default Rules;
