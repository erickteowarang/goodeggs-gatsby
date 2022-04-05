import * as React from "react"
import { ThemeProvider } from "styled-components"
import Header from "../Header"
import Footer from "../Footer"
import Head from "../Head"
import { theme } from "../../theme"
import Globals from "../../theme/globals"

const Layout = (props: any) => (
  <ThemeProvider theme={theme}>
    <Globals />
    <Head {...props} />
    <Header />
    {props.children}
    <Footer />
  </ThemeProvider>
)

export default Layout;
