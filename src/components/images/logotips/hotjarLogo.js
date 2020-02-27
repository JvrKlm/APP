import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HotjarLogoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logotips/hotjar-logo.png" }) {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img alt="Hotjar Logo" title="Hotjar" fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)
export default HotjarLogoImage
