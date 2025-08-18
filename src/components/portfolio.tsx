"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { portfolioProjects } from "@/constants/portfolio";

const portfolio = () => {
  return (
    <section className="relative w-full py-12 lg:py-20">
      {/* vertical translucent lines */}
      <div className="absolute inset-y-0 left-10 w-[1px] bg-black/5 z-20" />
      <div className="absolute inset-y-0 left-1/3 w-[1px] bg-black/5 z-20 hidden lg:block" />
      <div className="absolute inset-y-0 left-2/3 w-[1px] bg-black/5 z-20 hidden lg:block" />
      <div className="absolute inset-y-0 right-10 w-[1px] bg-black/5 z-20" />
      {/* Background image with dark overlay */}
      <div className="w-full lg:px-10">
        {/* Grayish block above the image */}
        <div className="w-full px-10">
          <div className="w-full h-6 bg-[#F3F6FC] " />
        </div>
        <div className="relative h-[45vh] lg:h-[50vh] w-full lg:px-10 z-20">
          <Image
            src="/fwdportfolio8-image-8.jpg"
            alt="Portfolio background"
            className="absolute inset-0 w-full h-full object-cover"
            height={500}
            width={1920}
          />
          <div className="absolute inset-0 bg-black/35" /> {/* dark overlay */}
          {/* Subtitle + Title */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white ">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-lg lg:text-md font-medium lg:font-light uppercase tracking-[5px] mb-2 lg:mb-0"
            >
              Explore our work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold  drop-shadow-xs leading-tight"
            >
              What we can do together.
            </motion.h2>
          </div>
        </div>
        {/* Grayish block under the image */}
        <div className="w-full px-10">
          <div className="w-full h-6 bg-[#F3F6FC] " />
        </div>
      </div>
      {/* Portfolio grid */}
      <div className="flex flex-wrap justify-start px-10 py-10 lg:py-24">
        {portfolioProjects.map((project, idx) => (
          <div key={project.title} className={`relative w-full lg:w-1/3 mb-4 lg:mb-10 z-40 ${idx % 2 === 0 ? "lg:mt-10" : ""}`}>
            {/* Image with overlay */}
            <div className="relative h-64 lg:h-[60vh] w-full overflow-hidden">
              <Image src={project.images[0]} alt={project.title} fill className="object-cover" />
              <div className="group group-hover:text-gray-700 absolute inset-0 text-white bg-black/45 hover:bg-black/10 flex flex-col justify-between items-center p-4">
                <span className="text-xl font-bold leading-[16px] capitalize">{project.title}</span>
                <span className="text-sm tracking-[3px]">{project.publishedAt}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default portfolio;
