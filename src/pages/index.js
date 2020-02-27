import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomeVideo from '../components/homeVideo';

// SEO og:image
import ogImage from '../images/seo/index.jpg';

class IndexPage extends React.Component {
	render() {
		const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;
    const _ = require('lodash');
		return (
      <Layout>
        <SEO
          title="AP Projekt"
          description="Izrađujemo poslovne planove i projekte, pružamo usluge poslovnog savjetovanja i knjigovodstva za obrtnike te razvoj marketinške stragije."
          keywords={[`poslovanje`, `plan`, `projekt`, `knjigovodstvo`, `računovodstvo`, `samozapošljavanje`, `obrt`,`savjetovanje`,`AP Projekt`]}
          image = {ogImage}
        />
        <div className="bg-light pt-2 pb-2">
          <div className="container">
            <div className="row p-1 text-secondary">
              <div className="col d-none d-md-block">
                <small>
                  <FontAwesomeIcon icon="phone"/> +385 98 95 94 923 <FontAwesomeIcon className="ml-2" icon="envelope"/> info@approjekt.hr
                </small>
              </div>
              <div className="col text-right">
              </div>
            </div>
          </div>
        </div>
        <section className="bg-wave text-black">
          <div className="container">
						<div className="row align-items-center">
              <div className="col-md-12">
                <h1><strong>Vaš poslovni partner</strong></h1>
                <Link className="btn btn-warning btn-lg mt-3 rounded-pill" to="/usluge/">Više o uslugama</Link>
              </div>
						</div>
					</div>
				</section>
				<section className="bg-white">
			   <div className="container">
           <div className="row text-center">
              <div class="col-1">
              </div>          
              <div className="col-10">
							 <h2 className="text-center mb-5">O nama</h2>
							 <p class="text-justify"> AP Projekt je pružatelj profesionalnih poslovnih usluga osnovan u Osijeku 2019. godine.   
							 Naš paket usluga omogućuje klijentima ostvarivanje poduzetničke ideje te pruža kompletnu podršku poslovanju. </p>  
							 <p class="text-justify"> Naša misija je uspješna suradnja s malim poduzetnicima i onima koji će to tek postati. 
							 Usluge koje nudimo su izrada poslovnih planova, računovodstvo za paušalne obrtnike, poslovno savjetovanje i marketing. </p>  
							 <p class="text-justify"> S klijentima nastojimo uspostaviti dugoročne odnose pomažući im da ostvare svoje ciljeve u svakom poslovnom pogledu. 
							 Ovaj pristup jamči kvalitetnu uslugu koja će vaše poslovanje postaviti tamo gdje treba biti, na sam vrh. </p>
							 <p class="text-justify"> Sve što trebate učiniti je ispuniti naš obrazac za kontakt kako bi zakoračili s nama na put ka uspjehu! </p>  
				  	  </div>
				   </div>
				 </div>
        </section>
        <section className="bg-light">
         <div className="container">
           <div className="row text-center">
             <div className="col-md-4">
               <h5 className="mt-3"><FontAwesomeIcon icon="tasks" /> | Poslovni planovi</h5>
             </div>
             <div className="col-md-4">
               <h5 className="mt-3"><FontAwesomeIcon icon="calculator" /> | Knjigovodstvo za obrtnike</h5>
             </div>
             <div className="col-md-4">
            <h5 className="mt-3"><FontAwesomeIcon icon="ad" /> | Marketing</h5>
          </div>
        </div>
      </div>
    </section>
        <section className="bg-white">
					<div className="container">
						<div className="row">
							<div className="col">
								<h2 className="text-center mb-5">Novo na blogu</h2>
							</div>
						</div>
						<div className="row justify-content-start">
							{posts.map(({ node }) => {
								const title = node.frontmatter.title || node.fields.slug;
								return (
									<div className="col-md-4 mb-5" key={node.fields.slug}>
										<Link to={`/blog${node.fields.slug}`}>
											<Img fluid={node.frontmatter.image.childImageSharp.fluid} />
											<h4 className="mt-3">{title}</h4>
										</Link>
										<p
											dangerouslySetInnerHTML={{
												__html: node.frontmatter.description || node.excerpt,
											}}
										/>
										<small><FontAwesomeIcon icon="tags"/> Oznake članka:
											<ul className="list-inline">
												{
													node.frontmatter.tags.map(tag => (
														<li className="list-inline-item" key={tag.toString()}>
															<Link to={`/oznake/${_.kebabCase(tag)}`} >
																{tag}
															</Link>
                              {` | `}
														</li>
													))
												}
											</ul>
										</small>
									</div>
								);}
							)}
						</div>
					</div>
				</section>
        <HomeVideo/>
        
			</Layout>
		);}
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
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