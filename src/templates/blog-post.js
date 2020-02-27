import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PrevNext from '../components/prevnext';
import Breadcrumb from '../components/breadcrumb';
import Disqus from 'disqus-react';
import HomePWAImage from '../components/images/homePWA';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { prev, next } = this.props.pageContext
    const _ = require('lodash');
    const disqusConfig = {
      url: `https://hr.ori.solutions${this.props.location.pathname}`,
      identifier: `${post.id}`,
      title: post.frontmatter.title,
    }
    const facebookURL = 
      `https://www.facebook.com/sharer/sharer.php?u=` + 
      encodeURIComponent(`https://hr.ori.solutions${this.props.location.pathname}`);
    const twitterURL = 
      `https://twitter.com/intent/tweet/?text=` + 
      encodeURIComponent(post.frontmatter.title) +
      `&url=` + 
      encodeURIComponent(`https://hr.ori.solutions${this.props.location.pathname}`) + 
      `&via=SolutionsOri`;
    const linkedinURL = 
      `https://www.linkedin.com/shareArticle?mini=true&title=` + 
      encodeURIComponent(post.frontmatter.title) +
      `&url=` + 
      encodeURIComponent(`https://hr.ori.solutions${this.props.location.pathname}`) + 
      `&source=` + 
      encodeURIComponent(`https://hr.ori.solutions`) + 
      `&summary=` + 
      encodeURIComponent(post.frontmatter.description || post.excerpt);
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={`${post.frontmatter.title} - ORI Solutions`}
          description={post.frontmatter.description || post.excerpt}
          image={post.frontmatter.image.publicURL}
        />
        <Breadcrumb>
          <li className="breadcrumb-item"><Link to="/">Početna</Link></li>
          <li className="breadcrumb-item"><Link to="/blog/">Blog</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{post.frontmatter.title.slice(0,14)}...</li>
        </Breadcrumb>
        <section className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h1>{post.frontmatter.title}</h1>
                <p>
                  <FontAwesomeIcon icon="calendar-day"/> {post.frontmatter.date}
                  <FontAwesomeIcon className="ml-3" icon="tags"/> Oznake članka:
                  {
                    post.frontmatter.tags.map(tag => (
                      <span key={tag.toString()}>
                        {` `}
                        <Link to={`/oznake/${_.kebabCase(tag)}/`} >
                          {tag}
                        </Link>
                        {` | `}
                      </span>  
                    ))
                  }
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={post.frontmatter.youtube === 'yes' ? 'bg-secondary mb-5' : 'bg-white'}>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-md-8">
                <Img className={post.frontmatter.youtube === 'yes' ? 'mb-3 d-none' : 'mb-3'} fluid={post.frontmatter.image.childImageSharp.fluid} />
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white pt-0">
          <div className="container">
            <div className="row mb-5">
              <div className="col">
                <div className="d-flex align-items-center justify-content-center">
                  <a className="btn btn-outline-primary rounded-pill mr-3" href={facebookURL} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="mr-2" icon={['fab', 'facebook']} /> Facebook
                  </a>
                  <a className="btn btn-outline-primary rounded-pill mr-3" href={twitterURL} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="mr-2" icon={['fab', 'twitter']} /> Twitter
                  </a>
                  <a className="btn btn-outline-primary rounded-pill mr-3" href={linkedinURL} aria-label="LinkedIN" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="mr-2" icon={['fab', 'linkedin']} /> LinkedIN
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <hr/>
                <PrevNext prev={prev && prev.node} next={next && next.node} />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5 mt-3 mb-3">
                <HomePWAImage />
              </div>
              <div className="col-md-7">
                <h2>Proizvod - ORI PWA</h2>
                <p>Ubrzajte svoje poslovanje <Link to="/blog/zasto-vasa-nova-internet-stranica-treba-biti-progresivna-internet-aplikacija-pwa/">PWA aplikacijom</Link> koja je ujedno vaša internet stranica i mobilna aplikacija za Android i iOS uređaje.</p>
                <p>Posebno smo vodili računa da u proizvod ORI PWA uključimo sve što vam je potrebno i smanjimo vam glavobolju tokom izrade i redovnog održavanja.</p>
                <p>ORI PWA može dohvatiti podatke s bilo kojeg mjesta: RESTful api, WordPress, Magento, Drupal, Contentful, XML, JSON, proračunske tablice i još mnogo toga. Dohvaćene podatke možemo organizirati, prikazati i obraditi po vašim željama.</p>
                <p><strong>Želite li biti bezbrižni s modernom i brzom web stranicom bez ograničenja?</strong></p>
                <Link className="btn btn-warning btn-lg mt-3 rounded-pill" to="/proizvodi/ori-pwa/">Saznajte više</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white">
          <div className="container">
            <div className="row">
              <div className="col">
                <h3>Komentari</h3>
                <Disqus.DiscussionEmbed shortname="hr-ori-solutions" config={disqusConfig} />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        description
        tags
        youtube
        image {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
          publicURL
        }
      }
    }
  }
`
