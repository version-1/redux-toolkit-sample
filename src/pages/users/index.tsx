import React from 'react'
import { useSelector } from 'react-redux'
import {
  userSelector
} from 'modules/domain/user'
import Layout from 'components/templates/layout'
import Contact from 'components/organisms/contact'

const User = () => {
  const user = useSelector(userSelector)
  return (
    <Layout>
      <h2>User</h2>
      <Contact user={user} />
    </Layout>
  )
}

export default User
