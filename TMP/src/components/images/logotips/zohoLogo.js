import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ZohoLogoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logotips/zoho-logo.png" }) {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img alt="ZOHO Logo" title="ZOHO" fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)
export default ZohoLogoImage
