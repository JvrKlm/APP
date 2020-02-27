import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GALogoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logotips/ga-logo.png" }) {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img alt="Google Analytics Logo" title="Google Analytics" fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)
export default GALogoImage
