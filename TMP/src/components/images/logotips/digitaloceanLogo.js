import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const DigitaloceanLogoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logotips/digitalocean-logo.png" }) {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img alt="Digital Ocean Logo" title="Digital Ocean" fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)
export default DigitaloceanLogoImage
