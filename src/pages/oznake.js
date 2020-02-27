import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SEO from '../components/seo';
import Breadcrumb from '../components/breadcrumb';

// SEO og:image
import ogImage from '../images/seo/oznake.jpg';

function TagsPage(props) {
	const data = props.data.allMarkdownRemark.group;
	const _ = require('lodash');
	return (
		<Layout>
			<SEO
				title="Sve oznake - ORI Solutions"
				image={ogImage}
			/>
			<Breadcrumb>
				<li className="breadcrumb-item"><Link to="/">Početna</Link></li>
				<li className="breadcrumb-item active" aria-current="page">Oznake</li>
			</Breadcrumb>
			<section className="bg-white">
				<div className="container">
					<div className="row mb-3">
						<div className="col">
							<h1>Oznake <small className="text-secondary">| sortirane po nazivu</small></h1>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<ul className="list-inline">
								{
									data.map(tag => (
										<li className="list-inline-item mr-3 mb-3"  key={tag.fieldValue.toString()}>
											<Link to={`/oznake/${_.kebabCase(tag.fieldValue)}/`} >
												<FontAwesomeIcon icon="tag"/> {tag.fieldValue} {`(${tag.totalCount})`}
											</Link>
										</li>
									))
								}
							</ul>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;