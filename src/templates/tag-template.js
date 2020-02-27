import React from 'react';
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image';
import Layout from '../components/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SEO from '../components/seo';
import Breadcrumb from '../components/breadcrumb';

function Tags(props) {
  const posts = props.data.allMarkdownRemark.edges;
  const { tag } = props.pageContext;
  const _ = require('lodash');
  return (
    <Layout>
      <SEO 
        title={`Svi članci označeni s '${tag}' - ORI Solutions`}
        description={`Stranica članaka označenih oznakom '${tag}' na ORI blogu.`}
      />
      <Breadcrumb>
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
        <li className="breadcrumb-item"><Link to="/oznake/">Oznake</Link></li>
        <li className="breadcrumb-item active" aria-current="page">{`'${tag}'`}</li>
      </Breadcrumb>
      <section className="bg-white">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>{`Oznaka: '${tag}'`} <small className="text-secondary">| sortirane po datumu</small></h1>
            </div>
          </div>
          <div className="row">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div className="col-md-6 col-lg-4" key={node.fields.slug}>
                  <article>
                    <Link to={`/blog${node.fields.slug}`}>
                      <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
                      <h4 className="mt-3">{title}</h4>
                    </Link>
                    <p
                    dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                    }}
                    />
                    <small>
                      <FontAwesomeIcon icon="tags"/> Oznake članaka
                      <ul className="list-inline">
                        {
                          node.frontmatter.tags.map(tag => (
                            <li className="list-inline-item" key={tag.toString()}>
                              <Link to={`/oznake/${_.kebabCase(tag)}/`} >
                                {tag}
                              </Link>
                              {` | `}
                            </li>
                          ))
                        }
                      </ul>
                    </small>
                  </article>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Tags;

export const query = graphql`
  query TagsQuery($tag: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`