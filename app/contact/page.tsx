import React from 'react'
import PageLayout from '../components/PageLayout'
import ContactForm from '../components/ContactForm'
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Contact page for Andrew Ras, full stack developer. The page can be used to contact Andrew Ras via the contact form",
};
const ContactPage = () => {
  return (
    <PageLayout title='Contact' borderColor='#5B5DDF'>
      <ContactForm />
    </PageLayout>
  )
}

export default ContactPage