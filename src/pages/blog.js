import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Breadcrumb from '../components/breadcrumb';

// SEO og:image
import ogImage from '../images/seo/blog.jpg';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;
    const _ = require('lodash');
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Vijesti - AP Projekt"
          description=""
          keywords={['natječaj', 'projekt', 'mjere']}
          image={ogImage}
        />
        <Breadcrumb>
          <li className="breadcrumb-item"><Link to="/">Početna</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Blog</li>
        </Breadcrumb>
        <section className="bg-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-9">
                <h1>Blog <small className="text-secondary">| sortiran po datumu</small></h1>
              </div>
              <div className="col-sm-3 text-right">
                <Link to="/oznake/"><FontAwesomeIcon icon="tags"/> Sve oznake</Link>
              </div>
            </div>
            <div className="row justify-content-start">
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug;
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
                        <FontAwesomeIcon icon="tags"/> Oznake članka
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
                );}
              )}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
  
export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
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
        }
      }
    }
  }
`;