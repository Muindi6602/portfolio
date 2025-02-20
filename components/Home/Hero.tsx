"use client";

import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { DownloadIcon, SendIcon } from "lucide-react";
import SocialsBlock from "../Footer/SocialsBlock";

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="maxContainer pSm min-h-[calc(100dvh-4rem)] flex flex-col items-center justify-center lg:flex-row"
    >
      <motion.div
        className="flex flex-col items-center justify-center space-y-6 w-full md:w-[520px]"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants}>
          <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
            Web Dev & Financial Analyst
          </div>
        </motion.div>
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight"
          variants={itemVariants}
        >
          Hello, My Name is <br /> Joseph Muindi
        </motion.h1>
        <motion.p
          className="text-sm md:text-base text-muted-foreground text-center text-pretty mb-8"
          variants={itemVariants}
        >
          I help businesses gain 20X more leads with fast, secure, and visually stunning websites optimized for growth and financial efficiency.

        </motion.p>
        <motion.div className="flexBetween gap-x-3 w-fit">
          <Link href={"/contact"}>
            <Button className="gap-x-2">
              Contact me <SendIcon size={18} />
            </Button>
          </Link>

          <a href="/josephmuindi.pdf" download="josephmuindi.pdf">
            <Button variant="secondary" className="gap-x-2">
              Download CV <DownloadIcon size={18} />
            </Button>
          </a>
        </motion.div>

        <SocialsBlock />
      </motion.div>
    </section>
  );
}
