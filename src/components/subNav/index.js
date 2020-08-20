import React from "react"
import Styles from "./subNav.module.scss"

const SubNav = ({ children }) => {
  return (
    <ul className={Styles.subNav}>
      {React.Children.map(children, l => (
        <li>{l}</li>
      ))}
    </ul>
  )
}

export default SubNav
