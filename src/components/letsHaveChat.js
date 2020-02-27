import React from 'react';
import { Link } from 'gatsby';

class LetsHaveChat extends React.Component {
  render() {
    return (
      <section className="bg-primary text-center text-white pt-4 pb-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <p className="m-0">ORI pruža kompletnu uslugu izrade poslovnih web identiteta! <Link className="btn btn-outline-light rounded-pill m-2" to="/kontakt/">Kontaktirajte nas</Link></p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default LetsHaveChat;
