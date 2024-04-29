import { PropsWithChildren } from 'react'

import { MainNavigation } from '@/components/layout'
import { NextPage } from 'next'

export const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  )
}
