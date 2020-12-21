import React from 'react'
import './index.module.scss'
import { Link } from 'react-router-dom'

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header>
      <div>
        <h1>Contact List</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Top</Link>
          </li>
          <li>
            <Link to="/users">Profile</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
