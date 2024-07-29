import { useTranslations } from 'next-intl'
import HeaderRight from '@/components/features/Navigation/HeaderRight'
import HeaderLeft from '@/components/features/Navigation/HeaderLeft'

export default function Navigation() {
  return (
    <div className="hidden md:block">
      <header className="relative z-[1000] h-20 w-full">
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
