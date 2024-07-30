'use client'

import HeaderRight from '@/components/features/Navigation/HeaderRight'
import HeaderLeft from '@/components/features/Navigation/HeaderLeft'
import { useEffect, useRef, useState } from 'react'

export default function Navigation() {
  const headerRef = useRef<any>(null)

  useEffect(() => {
    const header = headerRef.current
    const toggleClass = 'is-sticky'
    const handleScroll = () => {
      const currentScroll = window.scrollY
      if (currentScroll > 100) {
        header.classList.add(toggleClass)
      } else if (currentScroll === 0) {
        header.classList.remove(toggleClass)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="hidden h-20 md:block">
      <header ref={headerRef} className="header-scroll w-full bg-white dark:bg-[#242424]">
        <div className="w-full bg-transparent">
          <nav className="container mx-auto flex items-center justify-between gap-x-10 py-3">
            <HeaderLeft />
            <HeaderRight />
          </nav>
        </div>
      </header>
    </div>
  )
}
