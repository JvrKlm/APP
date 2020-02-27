import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Breadcrumb from '../components/breadcrumb';
import VideoUsluge from '../components/videoUsluge';
import Usluge3Image from '../components/images/usluge3';

// SEO og:image
import ogImage from '../images/seo/usluge.jpg';

const ServicesPage = () => (
  <Layout>
    <SEO
      title="Usluge - AP Projekt"
      description="Izrađujemo poslovne planove i projekte, pružamo usluge poslovnog savjetovanja i knjigovodstva za obrtnike te razvoj marketinške stragije."
      image={ogImage} 
    />
    <Breadcrumb>
      <li className="breadcrumb-item"><Link to="/">Početna</Link></li>
      <li className="breadcrumb-item active" aria-current="page">Usluge</li>
    </Breadcrumb>
    <section className="bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h1>Drago nam je što ste ovdje!</h1>
            <p>Ako tražite pomoć  došli ste na pravo mjesto. AP Projekt nudi kompletan paket usluga osmišljen da pruži cjelovitu  podršku vašem poslovanju.</p>
            <p>Bilo da ste iskusan poduzetnik, početnik ili tek planirate ostvariti svoju poslovnu ideju pozivamo vas da iskoristite lepezu usluga koje pružamo.</p>
            <p>Uz našu podršku vaše će poslovanje biti bezbrižnije, jer ćete se moći posvetiti vašoj primarnoj djelatnosti. Ukoliko imate ikakvih pitanja bez ustručavanja nas kontaktirate.</p>
            <Link className="btn btn-primary btn-lg mt-3 rounded-pill" to="/kontakt/">Surađujmo</Link>
          </div>
        <div class="col">
         <Usluge3Image/>
        </div>
        </div>
      </div>
    </section>
    <section className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h2>Želite li unaprijediti svoje poslovanje?</h2>
            <p>Pružit ćemo vam podršku od začetka ideje sve do uspjeha.</p>
          </div>
        </div>
      </div>
    </section>
    <VideoUsluge/>
    <section className="bg-light">
      <div className="container">
         <div className="col text-center">
            <h2>Stojimo vam na usluzi</h2>
            <p className="text-center">
              <FontAwesomeIcon className="text-success ml-2" icon="check" /> Savjetovanje <FontAwesomeIcon className="text-success ml-2" icon="check" /> Administracija <FontAwesomeIcon className="text-success ml-2" icon="check" /> Upravljanje <FontAwesomeIcon className="text-success ml-2" icon="check" /> Podrška
            </p>
         </div>
       </div>
    </section>
    <section className="bg-white">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4">
            <h5 className="mt-3"><FontAwesomeIcon icon="tasks" /> | Poslovni planovi</h5>
            <p>Pomažemo vam da oživite svoju poduzetničku ideju, savjetujemo pro odabiru pravnog oblika,  pripremamo poslovne planove i projektnu dokumentaciju te konzultiramo vezano uz poslovnu organizaciju i strategiju.</p>
          </div>
          <div className="col-md-4">
            <h5 className="mt-3"><FontAwesomeIcon icon="calculator" /> | Knjigovodstvo za obrtnike</h5>
            <p>Pružamo usluge knjigovodstva i financijskog savjetovanja za paušalne obrte. Vodimo poslovne knjige i izvještaje te obavljamo sve potrebne administrativne poslove.</p>
          </div>
          <div className="col-md-4">
            <h5 className="mt-3"><FontAwesomeIcon icon="ad" /> | Marketing</h5>
            <p>U sferi marketinga bavimo se analizom tržišta, izradom letaka i podsjetnica te digitalnim marketingom.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h2><strong>Cijena</strong></h2>
            <h3>izrade poslovnog plana HZZ - <strong>500 kuna</strong></h3>
            <h3>poslovnog savjetovanja - <strong>50 kuna sat</strong></h3>
            <h3>knjigovodstva - <strong>400 kuna mjesec</strong></h3>
            <p><small>Oslobođeno PDV-a temeljem članka 90. Zakona o PDV-u.</small></p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
export default ServicesPage;
