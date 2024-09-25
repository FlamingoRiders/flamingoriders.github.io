import * as React from "react";
import { Link, PageProps, graphql } from "gatsby";

import Layout from "components/layout/layout";
import SEO from "components/layout/seo";
import DayRecap from "components/stats/day-recap";
import { Day } from "models/day";
import TagList from "components/layout/tag-list";
import DateAndLocation from "components/layout/date-and-location";
import Slideshow from "components/slideshow/slideshow";

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
    location: string;
    tags: Array<string>;
    pictures: Array<string>;
  };
};

type QueryReturn = {
  markdownRemark: Post;
  statsJson: Day;
  previous: Post;
  next: Post;

  site: {
    siteMetadata: {
      title: string;
      description: string;
      image: string;
      siteUrl: string;
      picturesUrl: string;
    };
  };
};

const BlogPostTemplate: React.FC<PageProps<QueryReturn>> = ({
  data,
  location,
}) => {
  const post = data.markdownRemark;
  const day = data.statsJson;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p><DateAndLocation date={post.frontmatter.date} location={post.frontmatter.location} /> <TagList tags={post.frontmatter.tags} /></p>
        </header>
        {post.frontmatter.pictures && <Slideshow picturesUrl={data.site.siteMetadata.picturesUrl} pictureIds={post.frontmatter.pictures} />}
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        {day && <DayRecap day={day} />}
      </article>
      <hr />
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
        picturesUrl
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
        location
        tags
        pictures
      }
    }
    statsJson(date: { eq: $date }) {
      time
      date
      distance
      weather
      mood
      startPointName
      endPointName
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

export const Head: React.FC<PageProps<QueryReturn>> = ({ data }) => {
  const post = data.markdownRemark;
  return <SEO
    title={post.frontmatter.title}
    description={post.frontmatter.description || post.excerpt}
  />;
}
