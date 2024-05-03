import { ContactForm } from '@/components/contact'
import { getLayout } from '@/components/layout/base-layout/base-layout'

const ContactPage = () => {
  return <ContactForm />
}

ContactPage.getLayout = getLayout
export default ContactPage
