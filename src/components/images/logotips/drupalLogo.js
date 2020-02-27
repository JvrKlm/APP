import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const DrupalLogoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logotips/drupal-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img alt="Drupal Logo" title="Drupal" fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default DrupalLogoImage
