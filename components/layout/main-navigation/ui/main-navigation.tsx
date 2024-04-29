import { Logo } from '@/components/logo'
import Link from 'next/link'

import s from '../style/main-navigation.module.scss'

export const MainNavigation = () => {
  return (
    <header>
      <Link href={'/'}>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href={'/posts'}>Posts</Link>
            <Link href={'/contact'}>Contact Page</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
