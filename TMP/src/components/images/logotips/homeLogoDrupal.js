import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const DrupalLogoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logotips/drupal-logo-home.png" }) {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img alt="Drupal Logo" title="Drupal CMS" fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)
export default DrupalLogoImage
