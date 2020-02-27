import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GatsbyjsLogoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logotips/gatsbyjs-logo-home.png" }) {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img alt="GatsbyJS Logo" title="GatsbyJS" fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)
export default GatsbyjsLogoImage
