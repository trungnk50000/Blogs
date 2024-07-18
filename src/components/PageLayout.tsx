"use client";

import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/images-slider";

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

export default function PageLayout({ children, title }: Props) {
  const images = [
    "/images/banner.png",
    "/images/banner1.png",
    "/images/banner2.png",
    "/images/banner3.png",
  ];
  const t = useTranslations("PageLayout");

  return (
    <div className="min-w-0 shrink-0 grow-0 basis-full pl-4 flex flex-col items-center justify-center">
      <ImagesSlider
        images={images}
        className="relative h-[365px] w-full sm:h-[600px] md:h-[550px]"
      >
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            The hero section slideshow <br /> nobody asked for
          </motion.p>
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>Join now →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>
    </div>
  );
}
