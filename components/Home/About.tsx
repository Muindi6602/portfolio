"use client";

import DevImg from "../reusables/DevImg";
import { User2, MailIcon, PhoneCall, GraduationCap, SchoolIcon } from "lucide-react";
import { _info_data } from "@/types";
import { motion } from "framer-motion";
import { useState } from "react";

const infoData: _info_data[] = [
  {
    icon: <User2 size={20} />,
    text: "Joseph Muindi",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+254 115 783 375",
  },
  {
    icon: <MailIcon size={20} />,
    text: "mutuajosephmuindi@gmail.com",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Finance Degree Holder.",
  },
  {
    icon: <SchoolIcon size={20} />,
    text: "Machakos University, Kenya",
  },
];

// Services Data
const projects = {
  PHP: [
    { name: "Mpesa", url: "https://documentation-joseph.vercel.app/languages/PHP" },
    { name: "Websites", url: "https://documentation-joseph.vercel.app/languages/PHP" },
    { name: "Sms", url: "https://documentation-joseph.vercel.app/languages/PHP" },
    { name: "Mailers", url: "https://documentation-joseph.vercel.app/languages/PHP" },
  ],
  Reactjs: [
    { name: "Portfolio", url: "https://josephmuindi.vercel.app" },
    { name: "Design", url: "https://kenyaearn.co.ke/chuka" },
    { name: "Layout", url: "https://portal.kenyaearn.co.ke" },
    { name: "Websites", url: "https://kenyaearn.co.ke" },
  ],
  Nodejs: [
    { name: "Sms", url: "https://documentation-joseph.vercel.app/languages/Javascript" },
    { name: "Websites", url: "https://documentation-joseph.vercel.app/languages/Javascript" },
    { name: "Mpesa", url: "https://documentation-joseph.vercel.app/languages/Javascript" },
    { name: "Mailers", url: "https://documentation-joseph.vercel.app/languages/Javascript" },
  ],
  Django: [
    { name: "Mpesa", url: "https://documentation-joseph.vercel.app/languages/Python" },
    { name: "Mailers", url: "https://documentation-joseph.vercel.app/languages/Python" },
    { name: "Websites", url: "https://documentation-joseph.vercel.app/languages/Python" },
    { name: "Sms", url: "https://documentation-joseph.vercel.app/languages/Python" },
  ],
};

export default function AboutSection() {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof projects>("PHP");

  return (
    <section className="maxContainer pSm py-12">
      {/* About Section - Original Layout */}
      <div className="flex justify-between items-center flex-col gap-y-6 md:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="md:w-2/5"
        >
          <DevImg />
        </motion.div>
        <div className="md:w-2/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="text-sm uppercase text-center md:text-left font-semibold mb-4 text-primary tracking-[4px]">
              About me
            </div>
          </motion.div>
          <div className="text-sm mt-12 xl:mt-8 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">
              Unmatched Service Quality for Over 5 years
            </h3>
            <p className="text-muted-foreground max-w-[490px] mx-auto xl:mx-0">
              With expertise in finance and web development, I specialize in creating secure, high-performance websites that are visually appealing and functional. My focus is on delivering seamless user experiences, driving customer engagement, and providing solutions that align with financial efficiency.
            </p>

            <div className="grid gap-4 mb-12 mt-4">
              {infoData.map((item, index) => (
                <div
                  className="flex items-center gap-x-4 mx-auto xl:mx-0"
                  key={index}
                >
                  <div className="text-primary ">{item.icon}</div>
                  <div>{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section Below the About Section */}
      <div className="w-full mt-20">
        <h2 className="text-2xl text-center text-blue-600 mb-6">My Services</h2>

        {/* Navigation for Services */}
        <div className="flex justify-center space-x-6 mb-6">
          {Object.keys(projects).map((category) => (
            <button
              key={category}
              className={`px-4 py-2 text-blue-600 font-medium border-b-2 transition ${
                selectedCategory === category ? "border-blue-600" : "border-transparent hover:border-blue-400"
              }`}
              onClick={() => setSelectedCategory(category as keyof typeof projects)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Display Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {projects[selectedCategory].map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-black border border-gray-300 px-4 py-2 rounded-lg text-center hover:bg-gray-100 transition-colors"
            >
              {project.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}