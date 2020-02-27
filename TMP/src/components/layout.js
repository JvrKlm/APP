import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';
import TopNavigation from './navigation';
import Footer from './footer';
import CookieConsent from 'react-cookie-consent';
import '../sass/layout.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope, faPhone, faPaperPlane, faCheck, faTimes, faShieldAlt, faEuroSign, faLanguage, faTags, faTag, faCalendarDay, faAngleLeft, faAngleRight, faServer, faUserAstronaut, faAd, faTasks, faCalculator } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faDownload, faEnvelope, faPhone, faPaperPlane, faCheck, faTimes, faShieldAlt, faEuroSign, faLanguage, faTags, faTag, faCalendarDay, faAngleLeft, faAngleRight, faServer, faUserAstronaut, faAd, faTasks, faCalculator );

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <TopNavigation />
        <main>{children}</main>
        <Footer />
        <CookieConsent
          location="bottom"
          buttonText="Prihvaćam"
          cookieName="oriGdprCookie"
          expires={120}
          acceptOnScroll={true}
          acceptOnScrollPercentage={90}
          disableButtonStyles={true}
          buttonClasses="btn btn-success rounded-pill"
          containerClasses="bg-light pt-2 pb-1 pr-2 pl-2 border-top text-dark"
          >
            Koristimo kolačiće kako bismo vam pružili najrelevantnije informacije i što bolje korisničko iskustvo. Također, koristimo Analytics. Za opt-out iz Analyticsa, <Link to="/zastita-osobnih-podataka/">kliknite za više informacija</Link>.
        </CookieConsent>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
