import React from "react";
import { Link, PageProps, graphql } from "gatsby";
import Layout from "components/layout/layout";
import SEO from "components/layout/seo";
import { AppRoutes, AppSections } from "routes/app-routes";

type QueryReturn = {
  allMarkdownRemark: {
    nodes: {
      excerpt: string;
      fields: {
        slug: string;
      };
      frontmatter: {
        date: string;
        title: string;
        description: string;
      };
    };
  }[];

  site: {
    siteMetadata: {
      title: string;
      description: string;
      image: string;
      siteUrl: string;
    };
  };
};

const BlogList: React.FC<PageProps<QueryReturn>> = ({
  data,
  location,
  pageContext,
}) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.nodes;
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title={AppSections.BLOG} />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={AppSections.BLOG} />
      <h1>📝{AppSections.BLOG}</h1>
      <p>Retrouvez ici tous nos posts !</p>
      <ol style={{ listStyle: `none` }}>
        {posts.map((post) => {
          const title = post.frontmatter.title || post.fields.slug;

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          );
        })}
      </ol>
      <nav
        className="pagination is-centered"
        role="navigation"
        aria-label="pagination"
      >
        {!isFirst && (
          <Link
            className="pagination-previous"
            to={
              currentPage === 2
                ? AppRoutes.BLOG
                : `${AppRoutes.BLOG}/${prevPage}`
            }
          >
            ← Précédent
          </Link>
        )}
        {isFirst && (
          <div className="pagination-previous is-invisible">← Précédent</div>
        )}
        {!isLast && (
          <Link
            className="pagination-next"
            to={`${AppRoutes.BLOG}/${nextPage}`}
          >
            Suivant →
          </Link>
        )}
        {isLast && (
          <div className="pagination-next is-invisible">Suivant →</div>
        )}
      </nav>
    </Layout>
  );
};

export default BlogList;

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        excerpt
        frontmatter {
          date(formatString: "DD MMMM YYYY", locale: "fr-FR")
          title
          description
        }
        fields {
          slug
        }
      }
      totalCount
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
