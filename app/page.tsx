import { Hero } from "@/ui/Landing/Hero";
import Image from "next/image";

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
            priority
          />
        </figure>
        
        <Hero />

      </div>
    </main>
  );
}
