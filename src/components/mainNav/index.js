import React from "react"
import { Link } from "gatsby"
import Styles from "./mainNav.module.scss"

const MainNav = ({ location }) => {
  return (
    <ul className={Styles.mainNav}>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/worship">Worship</Link>
      </li>
      <li>
        <Link to="/business">Business</Link>
      </li>
      <li>
        <Link to="/calendar">Calendar</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  )
}

export default MainNav
