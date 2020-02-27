import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WordpressLogoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logotips/wordpress-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img alt="WordPress Logo" title="WordPress" fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default WordpressLogoImage
