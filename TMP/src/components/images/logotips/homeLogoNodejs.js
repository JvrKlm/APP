import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const NodeLogoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logotips/nodejs-logo-home.png" }) {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img alt="Node Logo" title="Node.js" fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)
export default NodeLogoImage