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




      allPrismicBlogPost(sort: {order: DESC, fields: [data___date]}) {
        group(field: tags) {
          fieldValue
          field
          totalCount
      }
        nodes {
          data {
            body {
              ... on PrismicBlogPostBodyCodeSlice {
                id
                primary {
                  snippet {
                    html
                    text
                  }
                }
                slice_type
              }
              ... on PrismicBlogPostBodyContentSlice {
                id
                slice_type
                primary {
                  description {
                    html
                    text
                  }
                }
              }
            }
            cover {
              url
              fluid {
                src
              }
            }
            date
            title {
              text
            }
            subtitle {
              text
            }
          }
          url
          uid
          tags
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




  const template = path.resolve("./src/templates/blogPost.jsx");
  const travelTemplate = path.resolve("./src/templates/travel.jsx");
  const projectTemplate = path.resolve("./src/templates/project.jsx");
  const tagTemplate = path.resolve("./src/templates/tag.js");

  // const articles = pages.data.allPrismicArticle.nodes
  const articles = pages.data.allPrismicBlogPost.nodes


  pages.data.allPrismicBlogPost.nodes.forEach((node, index) => {
    createPage({
      path: `/blog/${node.uid}`,
      component: template,
      context: {
        uid: node.uid,
        prev: index === 0 ? null : articles[index - 1],
        next: index === articles.length - 1 ? null : articles[index + 1]

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



  const tags = pages.data.allPrismicBlogPost.group
  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag.fieldValue}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })




};


