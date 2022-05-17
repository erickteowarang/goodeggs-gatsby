import * as React from "react";
import fetch from "cross-fetch";
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from "@apollo/client";
import { AnimatePresence } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';
import './overrides.css'

export const wrapRootElement = ({ element }) => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: process.env.WPGRAPHQL_URL,
      fetch,
    }),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{element}</ApolloProvider>;
};

export const wrapPageElement = ({element}) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);