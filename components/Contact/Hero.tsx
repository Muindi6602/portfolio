"use client";

import { useRef } from "react";

import Link from "next/link";
import { PhoneIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";

import { WHATSAPP_ICON } from "@/lib/icons";
import { Button } from "@/components/ui/button";
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
            Say Hello 👋
          </div>
        </motion.div>
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight"
          variants={itemVariants}
        >
          Lets&apos;s Work Together.
        </motion.h1>
        <motion.p
          className="text-sm md:text-base text-muted-foreground text-center text-pretty mb-8"
          variants={itemVariants}
        >
          I’m always open to new opportunities and collaborations. Contact me
          via email, phone, or social media. I look forward to hearing from you
          soon. 😊
        </motion.p>
        <motion.div className="flexBetween gap-x-3 w-fit">
          <Link href={"https://wa.me/+254115783375"}>
            <Button className="gap-x-2 bg-green-600 hover:bg-green-700">
              WhatsApp <WHATSAPP_ICON />
            </Button>
          </Link>

          <Link href="tel:+254115783375">
            <Button variant="secondary" className="gap-x-2">
              Call Me <PhoneIcon size={18} />
            </Button>
          </Link>
        </motion.div>

        <SocialsBlock />
      </motion.div>
    </section>
  );
}
