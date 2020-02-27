import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WordpressLogoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logotips/wordpress-logo-home.png" }) {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img alt="WordPress Logo" title="WordPress CMS" fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)
export default WordpressLogoImage
