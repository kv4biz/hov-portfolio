"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="relative w-full bg-[#090B19] py-5">
      {/* vertical translucent lines */}
      <div className="absolute inset-y-0 left-10 w-[1px] bg-white/10 z-40" />
      <div className="absolute inset-y-0 left-1/3 w-[1px] bg-white/10 z-40 hidden lg:block" />
      <div className="absolute inset-y-0 left-2/3 w-[1px] bg-white/10 z-40 hidden lg:block" />
      <div className="absolute inset-y-0 right-10 w-[1px] bg-white/10 z-40" />
      {/* Desktop layout: image on left, content on right */}
      <div className="hidden lg:flex lg:min-h-[400px]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 relative px-10"
        >
          <Image src="/fwdportfolio9-image-7.jpg" alt="Interior Design" fill className="object-contain" />
        </motion.div>
        <div className="flex-1 flex flex-col justify-center text-right items-end p-12 lg:p-16">
          <motion.h2
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-white mb-6 leading-tight tracking-[3px] uppercase"
          >
            Let&apos;s Work Together And We&apos;ll Help You By Our Best Interior Design
          </motion.h2>
          <Button variant={"outline"} size="lg">
            Let&apos;s Chat
          </Button>
        </div>
      </div>

      {/* Mobile layout: image as background with overlay */}
      <div className="lg:hidden relative min-h-[450px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/fwdportfolio9-image-7.jpg" alt="Interior Design" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#090B19]/90" />
        </div>
        <div className="relative z-10 text-center text-white p-8">
          <div className="text-lg font-medium text-white mb-6 leading-tight tracking-[1px] uppercase">
            Let&apos;s Work Together And We&apos;ll Help You By Our Best Interior Design
          </div>
          <Button variant={"outline"} size="lg">
            Let&apos;s Chat
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
