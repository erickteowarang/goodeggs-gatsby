// support for .env, .env.development, and .env.production
require('dotenv').config();
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://goodeggcollective.com.au/',
    title: 'Good Eggs Collective',
    author: `Erick Teowarang`,
    description: 'The website for the Good Eggs Collective',
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: process.env.WPGRAPHQL_URL,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 100,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        }
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-root-import',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-vanilla-extract',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Good Eggs Collective',
        short_name: 'Good Eggs',
        start_url: '/',
        // These can be imported once ESM support lands
        background_color: '#ffffff',
        theme_color: '#004ca3',
        icon: 'src/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-yoast-sitemap',
      options: {
        baseUrl: 'https://admin.thegoodeggcollective.com.au/',
        gatsbyUrl: 'https://thegoodeggcollective.com.au',
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Petrona:400,500,600,700,400italic,700italic', 'Poppins:300,400,500,700,300italic,400italic'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-68YX3KRQYX", // Google Analytics / GA
        ],
      },
    },
  ],
};
