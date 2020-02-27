import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WixLogoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logotips/wix-logo.png" }) {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img alt="WIX Logo" title="WIX online builder" fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)
export default WixLogoImage
