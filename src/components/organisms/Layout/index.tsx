import * as React from 'react';
import { motion } from "framer-motion"
import { ThemeProvider } from 'styled-components';
import Header from 'components/organisms/Header';
import Footer from 'components/organisms//Footer';
import Head from 'components/molecules/Head';
import { theme } from 'theme/index';
import Globals from 'theme/globals';

const Layout = (props: any) => (
  <ThemeProvider theme={theme}>
    <Globals />
    <Head {...props} />
    <Header pageTitle={props.title} />
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
    >
      {props.children}
    </motion.main>
    <Footer {...props.footerData} />
  </ThemeProvider>
);

export default Layout;
