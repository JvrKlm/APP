import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ReactjsLogoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logotips/reactjs.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img alt="GatsbyJS & ReactJS Logo" title="GatsbyJS & ReactJS " fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default ReactjsLogoImage
