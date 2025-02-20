"use client";

import ProjectCard from "@/components/reusables/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "KenyaEarn",
    description:
      "Developed KenyaEarn, an online writing platform built with PHP, featuring task management, user authentication, and secure submission processes.",
    image: "/images/kenyaearn.webp",
    liveLink: "https://kenyaearn.co.ke",
  },

  {
    title: "Chuka B-Market",
    description:
    "Co-developed with David Ndeleva using PHP and SQL to build a black market website for buyers and sellers to buy and sell goods.",
    image: "/images/chukabm.webp",
    liveLink: "https://kenyaearn.co.ke/chuka",
  },

  {
    title: "MuindiShop",
    description:
      "A full-stack e-commerce solution built with Laravel-PHP, featuring user authentication, product management, and secure checkout.",
    image: "/images/kara.webp",
    liveLink: "https://github.com/Muindi6602/Muindi6602.github.io/tree/main/sms",
  },

  {
    title: "ELearning",
    description:
      "Developed KenyaEarn's LMS portal, a platform for online learning with course management, student enrollment, and secure payment integration.",
    image: "/images/toin.webp",
    liveLink: "https://portal.kenyaearn.co.ke",
  },


  {
    title: "Hotspot Billing",
    description:
      "Developed a hotspot billing system using PHP and MySQL, offering user authentication, bandwidth management, and payment processing.",
      image: "/images/hotspot.webp",
      liveLink: "https://github.com/Muindi6602/Muindi6602.github.io/tree/main/PHPHotspotBillingSystem",
  },
   {
    title: "KNEC Results",
    description:
      "Built a clone of direct access of Knec Kcse Examination results portal using PHP and cURL using POST method for HTML values.",
    image: "/images/knec.webp",
    liveLink: "https://kenyaearn.co.ke/Home/",
  },
  {
    title: "First Portfolio",
    description:
      "Built my first portfolio using HTML, CSS, and JavaScript, showcasing a clean design and interactive features to highlight my skills.",
    image: "/images/port.webp",
    liveLink: "https://muindi6602.netlify.app",
  },
  {
    title: "KMTC Course Search",
    description:
    "Co-developed with David Ndeleva using PHP and SQL to display KMTC courses and programme codes based on KCSE grades.",
    image: "/images/dark.webp",
    liveLink: "https://kenyaearn.co.ke/kmtc",
  },
];

export default function MyProjectPage() {
  return (
    <main role="main" className="w-full py-12">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
