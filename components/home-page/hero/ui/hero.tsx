import Image from 'next/image'

import s from '../style/hero.module.scss'

export const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.image}>
        <Image
          alt={'An image showing Alex'}
          height={400}
          src={'/images/site/alex.png'}
          width={400}
        />
      </div>
      <h1>Hi, I am Alex</h1>
      <p>I blog about web development - especially frontend frameworks like Angular or React </p>
    </section>
  )
}
