import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GSLogoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logotips/gs-logo.png" }) {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img alt="Google Suite Logo" title="Google Suite" fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)
export default GSLogoImage
