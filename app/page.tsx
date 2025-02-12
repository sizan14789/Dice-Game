import { Hero } from "@/ui/Landing/Hero";
import Logo from "@/ui/Landing/Logo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen w-screen">
      <div className="flex lg:gap-20 xl:gap-28 2xl:gap-36 flex-col md:flex-row max-w-[1200px] m-auto">
        
        <Logo />
        
        <Hero />

      </div>
    </main>
  );
}
