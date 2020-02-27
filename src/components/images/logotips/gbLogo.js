import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GBLogoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logotips/gb-logo.png" }) {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img alt="Google Business Logo" title="Google Business" fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)
export default GBLogoImage
