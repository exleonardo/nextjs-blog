import { Hero } from '@/components/home-page/hero'
import { getLayout } from '@/components/layout/base-layout/base-layout'

const Home = () => {
  return (
    <>
      <Hero />
    </>
  )
}

Home.getLayout = getLayout
export default Home
