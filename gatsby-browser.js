import * as React from 'react';
import fetch from 'cross-fetch';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';
import { AnimatePresence } from 'framer-motion';
import { DataProvider } from 'context/DataProvider';

import 'swiper/css';
import 'swiper/css/pagination';
import './overrides.css';

export const wrapRootElement = ({ element }) => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: 'https://admin.thegoodeggs.com.au/graphql',
      fetch,
    }),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{element}</ApolloProvider>;
};

export const wrapPageElement = ({ element, props }) => (
  <DataProvider value={props}>
    <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
  </DataProvider>
);
