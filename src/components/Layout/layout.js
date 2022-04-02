import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import Head from "../Head/head"
import "../styles.css.ts"

export default function Layout(props) {
  return (
    <>
      <Head {...props} />
      <Header />
      {props.children}
      <Footer />
    </>
  )
}
