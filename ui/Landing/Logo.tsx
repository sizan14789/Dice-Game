"use client";

import Image from "next/image";
import { motion } from 'framer-motion'

const Logo = () => {
  return (
    <motion.figure className="relative min-w-[300px] min-h-[270px] sm:min-w-[320px] sm:min-h-[290px] md:min-w-[360px] md:min-h-[320px] lg:min-w-[400px] lg:min-h-[360px] xl:min-w-[500px] xl:min-h-[440px] 2xl:min-w-[600px] 2xl:min-h-[530px] "
    initial={{
      scale: 0
    }}
    whileInView={{
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
      }
    }}
    >
      <Image
        src="/images/dices.png"
        alt="Dice game logo"
        fill={true}
        className="object-cover"
        priority
      />
    </motion.figure>
  );
};

export default Logo;
