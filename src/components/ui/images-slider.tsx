"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import React, { useEffect, useState } from "react";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
  onSlideChange, // notify parent
}: {
  images: { src: string; focus?: string }[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
  onSlideChange?: (index: number) => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState<{ src: string; focus?: string }[]>([]);

  const handleNext = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 === images.length ? 0 : prevIndex + 1));
  }, [images.length]);

  const handlePrevious = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  // ✅ notify parent AFTER state updates (avoids React error)
  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(currentIndex);
    }
  }, [currentIndex, onSlideChange]);

  useEffect(() => {
    const loadImages = () => {
      setLoading(true);
      const loadPromises = images.map(
        (image) =>
          new Promise((resolve, reject) => {
            const img = new Image();
            img.src = image.src; // 👈 use src
            img.onload = () => resolve(image);
            img.onerror = reject;
          })
      );

      Promise.all(loadPromises)
        .then((loaded) => {
          setLoadedImages(loaded as { src: string; focus?: string }[]);
          setLoading(false);
        })
        .catch((error) => console.error("Failed to load images", error));
    };

    loadImages();
  }, [images]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") handleNext();
      if (event.key === "ArrowLeft") handlePrevious();
    };

    window.addEventListener("keydown", handleKeyDown);

    let interval: ReturnType<typeof setInterval>;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 30000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, [autoplay, images.length, handleNext, handlePrevious]);

  const slideVariants = {
    initial: { scale: 0, opacity: 0, rotateX: 45 },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1.0] },
    },
    upExit: { opacity: 1, y: "-150%", transition: { duration: 1 } },
    downExit: { opacity: 1, y: "150%", transition: { duration: 1 } },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div className={cn("overflow-hidden h-full w-full relative flex items-center justify-center", className)} style={{ perspective: "1000px" }}>
      {areImagesLoaded && children}
      {areImagesLoaded && overlay && <div className={cn("absolute inset-0 bg-black/35 z-40", overlayClassName)} />}

      {areImagesLoaded && (
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex].src}
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className={cn(
              "image h-full w-full absolute inset-0 object-cover",
              loadedImages[currentIndex].focus // 👈 inject object-position
            )}
          />
        </AnimatePresence>
      )}
    </div>
  );
};
