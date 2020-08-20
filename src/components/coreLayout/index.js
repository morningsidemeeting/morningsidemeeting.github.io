import React from "react"
import MainNav from "../../components/mainNav"
import { Link } from "gatsby"
import Styles from "./coreLayout.module.scss"

export default function CoreLayout({
  withSubtitle = false,
  withNav = true,
  children,
}) {
  return (
    <div className={Styles.container}>
      <h1>
        <Link to="/">Morningside Quaker Meeting</Link>
      </h1>
      {withSubtitle ? (
        <h2>
          Morningside Monthly Meeting
          <br />
          of the Religious Society of Friends
        </h2>
      ) : null}
      {withNav ? <MainNav /> : null}
      <main>{children}</main>
    </div>
  )
}
