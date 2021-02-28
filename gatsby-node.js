const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");
const _ = require("lodash")


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "pages" });
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // const result = await graphql(`
  //     query {
  //       allMarkdownRemark {
  //         edges {
  //           node {
  //             fields {
  //               slug
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `)


  // result.data.allMarkdownRemark.edges.forEach(({ node }) => {
  //   createPage({
  //     path: node.fields.slug,
  //     component: path.resolve(`./src/templates/blogPost.js`),
  //     context: {
  //       // Data passed to context is available
  //       // in page queries as GraphQL variables.
  //       slug: node.fields.slug,
  //     },
  //   })

  // })


  // prismic inputs
  const pages = await graphql(`
    {
      allPrismicArticle {
        nodes {
            tags
            id
            uid
            first_publication_date
            last_publication_date
            data {
              title {
                text
              }
              category
            }
            url
          
        }
      }

      allPrismicProject {
        nodes {
            tags
            id
            uid
            first_publication_date
            last_publication_date
            data {
              title {
                text
              }
            }
            url
          
        }
      }

      allPrismicTravel {
        nodes {

          id
          uid
          data {
            country {
              text
            }
            city {
              text
            }
          }
          url
        
        }
        
      }
      
    }
    
    `);

  const template = path.resolve("./src/templates/post.jsx");
  const travelTemplate = path.resolve("./src/templates/travel.jsx");
  const projectTemplate = path.resolve("./src/templates/project.jsx");
  const tagTemplate = path.resolve("./src/templates/tag.js");



  pages.data.allPrismicArticle.nodes.forEach((node) => {
    createPage({
      path: `/articles/${node.uid}`,
      component: template,
      context: {
        uid: node.uid,
      },
    });
  });

  pages.data.allPrismicProject.nodes.forEach((node) => {
    createPage({
      path: `/${node.uid}`,
      component: projectTemplate,
      context: {
        uid: node.uid,
      },
    });
  });

  pages.data.allPrismicTravel.nodes.forEach((node) => {
    createPage({
      path: `/travel/${node.uid}`,
      component: travelTemplate,
      context: {
        uid: node.uid,
      },
    });
  });

  pages.data.allPrismicArticle.nodes.forEach((node) => {
    createPage({
      path: `/tags/${node.data.category}`,
      component: tagTemplate,
      context: {
        category: node.data.category,
      },
    });
  });





};


