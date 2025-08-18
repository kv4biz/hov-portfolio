"use client";
import { motion } from "framer-motion";
import { servicesData } from "@/constants/services";

const service = () => {
  return (
    <section className="relative w-full bg-[#F3F6FC] py-12 lg:py-20">
      {/* vertical translucent lines */}
      <div className="absolute inset-y-0 left-10 w-[1px] bg-black/5 z-40" />
      <div className="absolute inset-y-0 right-10 w-[1px] bg-black/5 z-40" />

      <div className="container mx-auto w-full relative z-50">
        {/* Subtitle & Title */}
        <div className="text-center lg:text-left mb-12 lg:mb-16 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-lg lg:text-md font-medium lg:font-light uppercase tracking-[5px] text-[#090B19] mb-2 lg:mb-0"
          >
            Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-[#090B19]  drop-shadow-xs leading-tight"
          >
            We do it best.
          </motion.h2>
        </div>

        {/* Services cards */}
        <div className="w-full flex flex-col lg:flex-row px-10 lg:px-4">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="p-8 lg:py-12 text-left flex flex-col items-start w-full lg:w-1/3  border border-black/5">
                <div className="p-3 rounded-full bg-[#6E7488] mb-10 lg:mb-16">
                  <Icon className="w-5 h-5 text-[#F3F6FC]" />
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-5">{service.title}</h3>
                <div className="text-[#6E7488] text-sm">{service.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default service;
