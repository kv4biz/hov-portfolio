"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { portfolioProjects } from "@/constants/portfolio";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Define the project type
interface Project {
  title: string;
  publishedAt: string;
  images: string[];
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openViewer = (project: Project) => {
    setSelectedProject(project);
  };

  const closeViewer = () => {
    setSelectedProject(null);
  };

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
          <div className="w-full h-6 bg-[#F3F6FC]" />
        </div>
        <div className="relative h-[320px] lg:h-[400px] w-full lg:px-10 z-20">
          <Image
            src="/fwdportfolio8-image-8.jpg"
            alt="Portfolio background"
            className="absolute inset-0 w-full h-full object-cover"
            height={500}
            width={1920}
          />
          <div className="absolute inset-0 bg-black/35" />
          {/* Subtitle + Title */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
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
              className="text-4xl lg:text-5xl font-bold drop-shadow-xs leading-tight"
            >
              What we can do together.
            </motion.h2>
          </div>
        </div>
        {/* Grayish block under the image */}
        <div className="w-full px-10">
          <div className="w-full h-6 bg-[#F3F6FC]" />
        </div>
      </div>

      {/* Portfolio grid */}
      <div className="flex flex-wrap justify-start px-10 pt-10 lg:pt-24">
        {portfolioProjects.map((project, idx) => (
          <div key={project.title} className={`relative w-full lg:w-1/3 mb-4 lg:mb-10 z-40 ${idx % 2 === 0 ? "lg:mt-10" : ""}`}>
            {/* Clickable Image with overlay */}
            <div className="relative h-80 md:h-88 lg:h-100 w-full overflow-hidden cursor-pointer" onClick={() => openViewer(project)}>
              <Image src={project.images[0]} alt={project.title} fill className="object-cover" />
              <div className="absolute inset-0 text-white bg-black/45 hover:bg-black/15 flex flex-col justify-between items-center p-4">
                <span className="text-xl font-bold tracking-[3px] capitalize">{project.title}</span>
                <span className="text-sm tracking-[3px]">{project.publishedAt}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Viewer Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center py-20 lg:py-10">
          <button className="absolute top-6 right-6 text-white text-3xl lg:text-xl  z-50" onClick={closeViewer}>
            ✕
          </button>

          <div className="w-full h-full lg:max-w-5xl mx-auto flex items-center justify-center gap-0">
            <Carousel className="w-full h-full">
              <CarouselContent className="h-full w-full">
                {selectedProject.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="flex items-center justify-center w-full h-full">
                      <Image
                        src={image}
                        alt={`${selectedProject.title} - Image ${index + 1}`}
                        width={1200}
                        height={800}
                        className="object-contain max-h-[80vh] w-auto"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 lg:-left-6" />
              <CarouselNext className="right-4 lg:-right-6" />
            </Carousel>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
