import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PrevNext = (props) => {
  const { prev, next } = props
  return (
    <div className="row align-items-center">
      <div className="col-6 pt-3 pb-3 text-left">
        {prev && (
          <Link to={`/blog${prev.fields.slug}`} rel="prev">
            <FontAwesomeIcon className="mr-1" icon="angle-left" /> {prev.frontmatter.title}
          </Link>
        )}
      </div>
      <div className="col-6 pt-3 pb-3 text-right border-left">
        {next && (
          <Link to={`/blog${next.fields.slug}`} rel="next">
            {next.frontmatter.title} <FontAwesomeIcon className="ml-1" icon="angle-right" />
          </Link>
        )}
      </div>
    </div>    
  )
}

export default PrevNext;