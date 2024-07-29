import LocaleSwitcherButton from '@/components/features/Navigation/components/LocaleSwitcherButton'
import NavigationLink from '@/components/features/Navigation/components/NavigationLink'
import ThemeSwitch from '@/components/features/ThemeSwitch'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export default function HeaderRight() {
  const t = useTranslations('Navigation')

  return (
    <div className="flex list-none items-center gap-x-10 transition-all">
      <NavigationLink href="/"></NavigationLink>
      <NavigationLink href="/about">{t('aboutme')}</NavigationLink>
      <NavigationLink href="/blogs">{t('blogs')}</NavigationLink>
      <NavigationLink href="/experiences">{t('experiences')}</NavigationLink>
      <NavigationLink href="/contact">{t('contact')}</NavigationLink>
      <LocaleSwitcherButton />
      <ThemeSwitch />
    </div>
  )
}
