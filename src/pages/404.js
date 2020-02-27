import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';
import ErrorBannerImage from '../components/images/errorBanner';
import Breadcrumb from '../components/breadcrumb';

// SEO og:image
import ogImage from '../images/seo/404.jpg';

const ErrorPage = () => (
	<Layout>
		<SEO
			title="Stranica nije pronađena - ORI Solutions"
			description="Poveznica koju ste tražili je možda pokidana ili je tražena stranica obrisana."
			image={ogImage}
		/>
		<Breadcrumb>
			<li className="breadcrumb-item"><Link to="/">Početna</Link></li>
			<li className="breadcrumb-item active" aria-current="page">Stranica nije pronažena</li>
		</Breadcrumb>
		<section className="bg-white">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-6">
						<h1>Stranica nije pronađena</h1>
						<p>Poveznica koju ste tražili je možda pokidana ili je tražena stranica obrisana.</p>
						<Link className="btn btn-primary btn-lg mt-3 rounded-pill" to="/">Vratite se na početnu stranicu</Link>
					</div>
					<div className="col-md-6">
						<ErrorBannerImage/>
					</div>
				</div>
			</div>
		</section>
	</Layout>
);

export default ErrorPage;
