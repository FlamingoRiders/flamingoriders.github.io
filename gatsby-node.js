const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const POSTS_PER_PAGE = 10;

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for post list and blog post
  const postList = path.resolve("./src/templates/blog-list.tsx");
  const blogPost = path.resolve("./src/templates/blog-post.tsx");

  // Get all markdown blog posts sorted by date
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
        nodes {
          id
          frontmatter {
            date
            location
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors,
    );
    return;
  }

  const posts = result.data.allMarkdownRemark.nodes;

  if (posts.length > 0) {
    // Create paginated blog list pages
    const numPages = Math.ceil(posts.length / POSTS_PER_PAGE);
    Array.from({ length: numPages }).forEach((_, i) => {
      const firstPage = i === 0;
      const currentPage = i + 1;
      createPage({
        path: firstPage ? "/blog" : `/blog/${currentPage}`,
        component: postList,
        context: {
          limit: POSTS_PER_PAGE,
          skip: i * POSTS_PER_PAGE,
          numPages,
          currentPage,
        },
      });
    });
  }

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL
  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id;
      const nextPostId =
        index === posts.length - 1 ? null : posts[index + 1].id;

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
          date: post.frontmatter.date,
        },
      });
    });
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteMetadata {
      author: Author
      siteUrl: String
      picturesUrl: String
      social: Social
    }

    type Author {
      name: String
      people: String
      summary: String
    }

    type Social {
      polarsteps: String
      strava: String
      github: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      location: String
      tags: [String]
      pictures: [String]
    }

    type Fields {
      slug: String
    }

    type DayStat {
      time: String
      date: Date @dateformat
      distance: Float
      weather: String
      startPointName: String
      endPointName: String
    }
  `);
};
