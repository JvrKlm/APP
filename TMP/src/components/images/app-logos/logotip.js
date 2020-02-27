import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logotip = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logotip.png" }) {
          childImageSharp {
            fixed(height: 660) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img style={{height:168, width:315}} alt="APProjekt" fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)
export default Logotip