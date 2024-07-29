'use client'

import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import { ImagesSlider } from '@/components/features/ImagesSlider'

type Props = {
  children?: ReactNode
  title: ReactNode
}

export default function PageLayout({ children, title }: Props) {
  const images = [
    '/images/banner.png',
    '/images/banner1.png',
    '/images/banner2.png',
    '/images/banner3.png',
  ]
  const t = useTranslations('Navigation')

  return (
    <div className="flex min-w-0 shrink-0 grow-0 basis-full flex-col items-center justify-center">
      <ImagesSlider
        images={images}
        className="relative h-[365px] w-full sm:h-[600px] md:h-[550px]"
        render={({ currentIndex }) => {
          return (
            <motion.div
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="z-50 flex flex-col items-center justify-center"
            >
              <motion.p className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-center text-xl font-bold text-transparent md:text-6xl">
                {currentIndex === 0 && (
                  <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center justify-center sm:bottom-full sm:left-[20%] sm:translate-y-full md:left-full md:-translate-x-full xl:bottom-full xl:left-full">
                    <div className="relative flex h-[90px] w-[175px] translate-x-[50px] justify-center sm:h-[120px] sm:w-[225px] md:mb-2 md:w-[350px]">
                      <Image
                        style={{
                          position: 'absolute',
                          height: '100%',
                          width: '100%',
                          objectFit: 'contain',
                          color: 'transparent',
                        }}
                        alt="logo"
                        title="frame-chat-image"
                        loading="lazy"
                        layout="fill"
                        src="/images/frame-chat-2.png"
                      />
                      <p className="mb-4 flex flex-col items-center justify-center gap-y-0.5 text-xs font-medium text-[#75787e] md:text-sm lg:text-base">
                        <span>{t('frameChat2.greeting')}</span>
                        <span>{t('frameChat2.profession')}</span>
                      </p>
                    </div>
                    <Image
                      className="z-20 h-20 w-20 rounded-[100%] bg-white sm:h-24 sm:w-24"
                      alt="full-logo"
                      title="full-logo-image"
                      loading="lazy"
                      src="/images/full-logo-img.png"
                      width={80}
                      height={80}
                    />
                  </div>
                )}
              </motion.p>
              <button className="relative mx-auto mt-4 rounded-full border border-emerald-500/20 bg-emerald-300/10 px-4 py-2 text-center text-white backdrop-blur-sm">
                <span>Join now →</span>
                <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
              </button>
            </motion.div>
          )
        }}
      ></ImagesSlider>
    </div>
  )
}
