import * as React from "react"
import { graphql, Link, type PageProps } from "gatsby"
import Layout from "../components/layout"
import Bio from "../components/bio"
import SEO from "../components/seo"

type QueryReturn = {
  allMarkdownRemark: {
    nodes: {
      excerpt: string;
      fields: {
        slug: string;
      }
      frontmatter: {
        date: string;
        title: string;
        description: string;
      }
    }
  }[]

  site: {
    siteMetadata: {
      title: string;
      description: string;
      image: string;
      siteUrl: string;
    }
  }
}

const BlogIndex: React.FC<PageProps<QueryReturn>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }
  console.log(posts);
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

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
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
    ) {
      nodes {
        excerpt
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
        fields {
          slug
        }
      }
    }
  }
`

//export const Head: HeadFC = () => <SEO title="All posts" />;