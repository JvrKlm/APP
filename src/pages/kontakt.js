import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Breadcrumb from '../components/breadcrumb';
import QRcodeImage from '../components/images/qrCode';
import ContactMapImage from '../components/images/contactMap';
import Kontakt2Image from '../components/images/kontakt2';

// SEO og:image
import ogImage from '../images/seo/kontakt.jpg';

const ContactPage = () => (
  <Layout>
    <SEO
      title="Kontakt - AP Projekt"
      description="Izrađujemo poslovne planove i projekte, pružamo usluge poslovnog savjetovanja i knjigovodstva za obrtnike te razvoj marketinške stragije."
      image={ogImage} 
    />
    <Breadcrumb>
      <li className="breadcrumb-item"><Link to="/">Početna</Link></li>
      <li className="breadcrumb-item active" aria-current="page">Kontakt</li>
    </Breadcrumb>
    <section className="bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Trebate li pomoć na putu prema uspjehu?</h1>
            <p>Volimo razgovarati o novim idejama i oživljavati ih, stoga nas slobodno kontaktirajte i realizirajmo vašu ideju.</p>
            <Kontakt2Image/>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <form action="https://formspree.io/info@approjekt.hr" method="POST">
                  <div className="form-group">
                    <label htmlFor="formName">Vaše ime</label>
                    <input type="text" className="form-control" id="formName" name="name"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="formEmail">E-mail <span className="text-danger">*</span></label>
                    <input type="email" className="form-control" id="formEmail" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="formPhone">Telefon </label>
                    <input type="text" className="form-control" id="formPhone" name="phone"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="formTextarea">Kako vam možemo pomoći? <span className="text-danger">*</span></label>
                    <textarea className="form-control" id="formTextarea" name="message" rows="6" required></textarea>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="formCheck" required />
                    <label className="form-check-label" htmlFor="formCheck">
                    Razumijem da će gore navedene informacije biti pohranjene samo u poslovne svrhe i poslane putem usluge <a href="https://formspree.io/" target="_blank" rel="noopener noreferrer">Formspree</a> te sam pročitao <Link to="/zastita-osobnih-podataka/">Zaštitu osobnih podataka</Link>.
                    </label>
                  </div>
                  <button type="submit" className="mt-5 btn btn-primary btn-lg float-right rounded-pill" value="Send"><FontAwesomeIcon className="mr-2" icon="paper-plane" /> Pošalji</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <h4 className="pt-2 pb-2">ORI Solutions</h4>
            <p>
              Pravni zastupnik: <a>Mirjana Birmili</a><br />
              Adresa: Gundulićeva 50, 31000 Osijek, Hrvatska<br />
              OIB: 89945535706
            </p>
            <p>
              <FontAwesomeIcon icon="phone" /> +385 98 95 94 923<br/>
              <FontAwesomeIcon icon="envelope" /> info@approjekt.hr
            </p>
          </div>
          <div className="col-sm-4">
            <h4 className="pt-2 pb-2">Banka</h4>
            <p>
              Privredna Banka Zagreb d.d.<br />
              IBAN: HR3423400091160542343<br />
            </p>
          </div>
          <div className="d-none d-md-block col-sm-3">
            <QRcodeImage />
            <p>QR vcard</p>
          </div>
        </div>
      </div>
    </section>
    <a href="https://goo.gl/maps/hL422dpnFy5GzkWdA" target="_blank" rel="noopener noreferrer">
      <ContactMapImage />
    </a>
  </Layout>
);

export default ContactPage;
