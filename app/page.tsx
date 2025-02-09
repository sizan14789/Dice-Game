import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen w-screen">
      <div className="flex lg:gap-20 xl:gap-28 2xl:gap-36 flex-col md:flex-row max-w-[1200px] m-auto">
        <figure className="relative min-w-[300px] min-h-[270px] sm:min-w-[320px] sm:min-h-[290px] md:min-w-[360px] md:min-h-[320px] lg:min-w-[400px] lg:min-h-[360px] xl:min-w-[500px] xl:min-h-[440px] 2xl:min-w-[600px] 2xl:min-h-[530px] ">
          <Image
            src="/images/dices.png"
            alt="Dice game logo"
            fill={true}
            className="object-cover"
          />
        </figure>
        <div className="flex md:items-end items-center flex-col w-full gap-5 justify-center">
          <h2 className="text-6xl md:text-6xl lg:text-7xl xl:text-[5rem] font-bold whitespace-nowrap">
            DICE GAME
          </h2>
          <Link
            href="/game"
            className="font-bold rounded-md md:ml-auto w-44 py-4 bg-black text-white"
          >
            <button className="w-full h-full">Play</button>
          </Link>
          <a href="https://github.com/sizan14789/Dice-Game.git">
            <button className="font-bold rounded-md md:ml-auto w-44 py-4 bg-white border-2 border-black">
              Source Code
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}
