import React from 'react'
import PageLayout from '../components/PageLayout'
import ContactForm from '../components/ContactForm'

const ContactPage = () => {
  return (
    <PageLayout title='Contact' borderColor='#5B5DDF'>
      <ContactForm />
    </PageLayout>
  )
}

export default ContactPage