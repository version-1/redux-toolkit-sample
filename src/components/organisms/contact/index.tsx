import React from 'react'
import { Link } from 'react-router-dom'
import User from 'models/user'

interface Props {
  user: User
}
const Contact: React.FC<Props> = ({ user }) => {
  if (!user) {
    return <></>
  }
  return (
    <div>
      <p>
        <Link to={{
          pathname: `/contacts/${user.id}`,
          state: { id: user.id }
        }}>{user.fullname}</Link>({user.gender})
      </p>
      <p>{user.email}</p>
    </div>
  )
}

export default Contact
