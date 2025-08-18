"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slider";
import { headerImages } from "@/constants/images";

export function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="relative h-[90vh] md:h-[88vh] w-full">
      {/* Background slider */}
      <ImagesSlider images={headerImages} onSlideChange={setCurrentSlide} overlay className="">
        {/* Topbar */}
        <div className="absolute top-0 left-0 w-full h-16 lg:w-1/3 flex z-50">
          <div className="w-10 h-full bg-transparent hidden lg:block" />
          <div className="flex items-center justify-center lg:justify-start bg-white w-full h-full px-10">
            <h1 className="text-xl font-bold">Logo</h1>
          </div>
        </div>

        {/* vertical translucent lines */}
        <div className="absolute inset-y-0 left-10 w-[1px] bg-white/50 z-40" />
        <div className="absolute inset-y-0 left-1/3 w-[1px] bg-white/50 z-40 hidden lg:block" />
        <div className="absolute inset-y-0 left-2/3 w-[1px] bg-white/50 z-40 hidden lg:block" />
        <div className="absolute inset-y-0 right-10 w-[1px] bg-white/50 z-40" />

        {/* middle title + subtitle with animation */}
        <div className="absolute inset-0 flex flex-col items-center lg:items-start z-50 text-center lg:text-left mt-36 lg:mt-20 md:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-md uppercase tracking-[5px] text-white mb-8"
          >
            Haus of Vermillion
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-6xl lg:text-[80px] font-bold text-white drop-shadow-lg leading-tight"
          >
            Interior design
            <br />
            that matters.
          </motion.h1>
        </div>

        {/* bottom display */}
        <div className="absolute bottom-0 left-0 w-full h-30 lg:w-1/3 z-50 bg-white flex gap-2 items-center">
          {/* Featured vertical text */}
          <div className="w-10 h-full bg-[#F3F6FC] flex items-center justify-center">
            <p className="text-gray-500 font-normal text-xs tracking-[2px] rotate-270 writing-vertical uppercase">Featured</p>
          </div>

          {/* Slide details */}
          <div className="flex flex-col justify-center w-full px-2 md:px-6">
            <div className="uppercase tracking-[5px] text-sm mb-2">Design:</div>
            <div className="text-xl font-bold leading-[16px] capitalize">{headerImages[currentSlide].title}</div>
            <div className="text-sm tracking-widest mt-2">{headerImages[currentSlide].publishedAt}</div>
          </div>
        </div>
      </ImagesSlider>
    </section>
  );
}
