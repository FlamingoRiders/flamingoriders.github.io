import * as React from "react";
import { Link, PageProps, graphql } from "gatsby";

import Bio from "components/layout/bio";
import Layout from "components/layout/layout";
import Seo from "components/layout/seo";

type Post = {
  id: string;
  excerpt: string;
  html: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    date: string;
    title: string;
    description: string;
  };
};

type DayStat = {
  time: string;
  date: string;
  distance: number;
};

type QueryReturn = {
  markdownRemark: Post;
  statsJson: DayStat;
  previous: Post;
  next: Post;

  site: {
    siteMetadata: {
      title: string;
      description: string;
      image: string;
      siteUrl: string;
    };
  };
};

const BlogPostTemplate: React.FC<PageProps<QueryReturn>> = ({
  data,
  location,
}) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <h3>Bilan du jour</h3>
        <table>
          <thead>
            <tr>
              <th align="center">Météo</th>
              <th align="center">Position</th>
              <th align="center">Temps écoulé</th>
              <th align="center">Distance parcourue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="center">⛅</td>
              <td align="center">🚩 Paris</td>
              <td align="center">⏳ 01h10</td>
              <td align="center">🚲 25 km</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
    $date: Date
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY", locale: "fr-FR")
        description
      }
    }
    statsJson(date: { eq: $date }) {
      time
      date
      distance
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
