'use client'

import { useParams } from 'next/navigation'
import { useTransition } from 'react'
import { useRouter, usePathname } from '@/navigation'
import { useLocale } from 'next-intl'
import { Button } from '@/components/ui/button'

type LanguageButtonProps = {
  title: string
  locale: string
  currentLocale: string
  onClick: () => void
  isPending: boolean
}

export default function LocaleSwitcherButton() {
  const locale = useLocale()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  const LanguageButton: React.FC<LanguageButtonProps> = ({
    title,
    locale,
    currentLocale,
    onClick,
    isPending,
  }) => (
    <Button title={title} onClick={onClick} disabled={isPending} variant={'secondary'}>
      <h2
        className={`cursor-pointer text-lg font-bold ${
          currentLocale === locale ? 'text-primary' : 'text-[#CACACA]'
        }`}
      >
        {locale.toUpperCase()}
      </h2>
    </Button>
  )
  const handleLocaleChange = (locale: string) => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: locale },
      )
    })
  }
  return (
    <>
      <div className="flex h-5 items-center space-x-4 text-sm">
        <LanguageButton
          title="Switch to vi"
          locale="vi"
          currentLocale={locale}
          onClick={() => handleLocaleChange('vi')}
          isPending={isPending}
        />
        <div
          data-orientation="vertical"
          aria-orientation="vertical"
          role="separator"
          className="h-full w-[2px] bg-[#ccc]"
        ></div>
        <LanguageButton
          title="Switch to en"
          locale="en"
          currentLocale={locale}
          onClick={() => handleLocaleChange('en')}
          isPending={isPending}
        />
      </div>
    </>
  )
}
