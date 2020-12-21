import React from 'react'
import ReactDOM from 'react-dom'
import './index.module.scss'
import App from './pages/'
import Contact from './pages/contacts'
import User from './pages/users'
import reportWebVitals from './reportWebVitals'
import { HashRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="/contacts/:id">
        <Contact />
      </Route>
      <Route exact path="/users">
        <User />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
