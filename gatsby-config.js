/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});


module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Chester Yee",


  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "chesteryeecom",
        accessToken: "MC5YN2paZ2hJQUFDSUF2Wksx.CHFKBO-_ve-_vSHvv71x77-977-9Eu-_vSPvv73vv71f77-9fO-_ve-_ve-_ve-_ve-_vXsW77-977-977-9eFnvv70",
        // accessToken: `${process.env.API_KEY}`,
        linkResolver: ({node, key, value}) => (article) => `/${article.url}`,
        schemas: {
          article: require("./src/schemas/article.json"),
          travel: require("./src/schemas/travel.json"),
        },
      },
    },


    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },

    },


    {
      resolve: "gatsby-plugin-scroll-reveal",
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: false, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations
        // Advanced Options
        // selector: 'data-sal-repeat', // Selector of the elements to be animated

      },
    },
    "gatsby-transformer-remark",


    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `GatsbyJS`,
    //     short_name: `GatsbyJS`,
    //     start_url: `/`,
    //     background_color: `#6b37bf`,
    //     theme_color: `#6b37bf`,
    //     // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
    //     // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
    //     display: `standalone`,
    //     icon: `src/images/icon.png`, // This path is relative to the root of the site.
    //   }
    // },

  ],
};
