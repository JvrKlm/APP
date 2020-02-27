import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ReactjsLogoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logotips/reactjs-logo-home.png" }) {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img alt="ReactJS Logo" title="ReactJS" fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)
export default ReactjsLogoImage
