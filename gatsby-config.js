/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Chester Yee',
  },
  plugins: [

    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'chesteryeecom',
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => article => `/${article.url}`,
        schemas: {
          article: require('./src/schemas/article.json'),
          travel: require('./src/schemas/travel.json'),
          project: require('./src/schemas/project.json'),
        },
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,



    {
      resolve: 'gatsby-plugin-scroll-reveal',
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: false, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations
        // Advanced Options
        // selector: 'data-sal-repeat', // Selector of the elements to be animated
      },
    },
    'gatsby-transformer-remark',

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chester Yee`,
        short_name: `chesteryee.com`,
        start_url: `/`,
        background_color: `#1f1f1f`,
        theme_color: `#1D1D1D`,
        display: `standalone`,
        icon: `src/assets/faceLogo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
