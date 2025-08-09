import React from "react";
import { Link, PageProps, graphql } from "gatsby";
import Layout from "components/layout/layout";
import SEO from "components/layout/seo";
import { AppRoutes, AppSections } from "routes/app-routes";
import TagList from "components/layout/tag-list";
import DateAndLocation from "components/layout/date-and-location";

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
        location: string;
        tags: Array<string>;
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
  const isSecond = currentPage === 2;
  const isLast = currentPage === numPages;
  const isSecondLast = currentPage === numPages - 1;
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
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
      <h1>📝{AppSections.BLOG}</h1>
      <p>De la première à la dernière étape : notre histoire à vélo !</p>
      <ol style={{ listStyle: `none` }}>
        {posts.map((post) => {
          const title = post.frontmatter.title || post.fields.slug;

          return (
            <li key={post.fields.slug}>
              <Link to={post.fields.slug} itemProp="url">
                <article
                  className="post-list-item box"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>

                      <span itemProp="headline">{title}</span>
                    </h2>
                    <small>
                      <DateAndLocation
                        date={post.frontmatter.date}
                        location={post.frontmatter.location}
                      />
                    </small>
                    <TagList tags={post.frontmatter.tags} />
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
              </Link>
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
        <ul className="pagination-list my-auto">
          {!isFirst && (
            <Link
              className="pagination-link"
              to={`${AppRoutes.BLOG}`}
              aria-label="Go to first page"
            >
              1
            </Link>
          )}
          {currentPage > 3 && (
            <li className="my-auto">
              <span className="pagination-ellipsis">&hellip;</span>
            </li>
          )}
          {!isFirst && !isSecond && (
            <Link
              className="pagination-link"
              to={`${AppRoutes.BLOG}/${prevPage}`}
              aria-label={`Go to page ${prevPage}`}
            >
              {prevPage}
            </Link>
          )}
          <Link
            className="pagination-link is-current inactive-link"
            aria-label={`Page ${currentPage}`}
            aria-current="page"
            to={`${AppRoutes.BLOG}/${currentPage}`}
          >
            {currentPage}
          </Link>
          {!isLast && !isSecondLast && (
            <Link
              className="pagination-link"
              to={`${AppRoutes.BLOG}/${nextPage}`}
              aria-label={`Go to page ${nextPage}`}
            >
              {nextPage}
            </Link>
          )}
          {currentPage < numPages - 2 && (
            <li className="my-auto">
              <span className="pagination-ellipsis">&hellip;</span>
            </li>
          )}
          {!isLast && (
            <Link
              className="pagination-link"
              to={`${AppRoutes.BLOG}/${numPages}`}
              aria-label={`Go to page ${numPages}`}
            >
              {numPages}
            </Link>
          )}
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogList;

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: ASC } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        excerpt
        frontmatter {
          date(formatString: "DD MMMM YYYY", locale: "fr-FR")
          title
          description
          location
          tags
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

export const Head = () => {
  return <SEO title={AppSections.BLOG} />;
};
