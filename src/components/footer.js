import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import LetsHaveChat from './letsHaveChat';

export default class FooterSection extends React.Component {
  render() {
    return (
      <>
      <LetsHaveChat/>
      <footer className="footer">
        <section className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-sm-10">
                <h4 className="pt-2 pb-2">AP Projekt</h4>
                <p>
                  Pravni zastupnik: <a>Mirjana Birmili</a><br />
                  Adresa: Gundulićeva 50, 31000 Osijek, Hrvatska<br />
                </p>
                <p>
                  <FontAwesomeIcon icon="phone" /> +385 98 95 94 923<br/>
                  <FontAwesomeIcon icon="envelope" /> info@approjekt.hr
                </p>
              </div>
              <div className="col-sm-2">
                <h4 className="pt-2 pb-2">Sadržaj</h4>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link pl-0" to="/usluge/">Usluge</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link pl-0" to="/kontakt/">Kontakt</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col text-center">
                <a href="https://www.facebook.com/AP-Projekt-108813913889849/" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="m-2" icon={['fab', 'facebook']} size="3x" /></a>
                <p>
                  ORI Solutions ©2018-{new Date().getFullYear()}. Kôd licenciran pod licencom MIT-style.<br />
                  Verzija 0.6.22-build.20200102
                </p>
                <p>
                  <Link to="/zastita-osobnih-podataka/"><FontAwesomeIcon icon="shield-alt" /> Zaštita osobnih podataka</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
      </>
    );
  }
}
