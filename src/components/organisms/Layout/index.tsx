import * as React from 'react';
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
    <Header />
    {props.children}
    <Footer {...props.footerData} />
  </ThemeProvider>
);

export default Layout;
