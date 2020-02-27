import React from 'react';
import PropTypes from "prop-types";

const Breadcrumbs = ({ children }) => (
  <div className="bg-light">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav aria-label="breadcrumb mb-0 pb-0 pt-2">
            <ol className="breadcrumb mb-0 pl-0 pb-2">
              { children }
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
)

Breadcrumbs.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Breadcrumbs;

