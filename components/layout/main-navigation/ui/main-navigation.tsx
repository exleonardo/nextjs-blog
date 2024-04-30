import { Logo } from '@/components/logo'
import Link from 'next/link'

import s from '../style/main-navigation.module.scss'

export const MainNavigation = () => {
  return (
    <header className={s.header}>
      <Link href={'/'}>
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href={'/posts'}>Posts</Link>
          </li>
          <li>
            <Link href={'/contact'}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
