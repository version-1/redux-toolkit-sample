import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from 'components/templates/layout'
import Contact from 'components/organisms/contact'
import './index.module.scss'
import {
  fetchContactList,
  contactListSelector
} from 'modules/domain/contactList'

export const App = () => {
  const dispatch = useDispatch()
  const list = useSelector(contactListSelector)

  useEffect(() => {
    dispatch(fetchContactList({}))
  }, [])

  return (
    <Layout>
      <h2>List</h2>
      <ul>
        {list.map((item: any) => {
          return (
            <li key={item.id}>
              <Contact user={item} />
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default App
