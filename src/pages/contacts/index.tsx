import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Layout from 'components/templates/layout'
import Contact from 'components/organisms/contact'
import { createContactSelector } from 'modules/domain/contactList'

const retriveId = (pathname: string) => {
  return pathname.replace(/\/contacts\//, '')
}

const ContactPage = () => {
  const { pathname }: any = useLocation()
  const id = retriveId(pathname)
  const user = useSelector(createContactSelector(id || ''))
  return (
    <Layout>
      <h2>Contact</h2>
      <Contact user={user} />
    </Layout>
  )
}

export default ContactPage
