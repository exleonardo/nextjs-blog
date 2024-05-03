import { ContactForm } from '@/components/contact'
import { getLayout } from '@/components/layout/base-layout/base-layout'
import Head from 'next/head'

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta content={'send me your messages!'} name={'description'} />
      </Head>
      <ContactForm />
    </>
  )
}

ContactPage.getLayout = getLayout
export default ContactPage
