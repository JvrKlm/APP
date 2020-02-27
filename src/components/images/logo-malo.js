import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LogoMalo = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logo-malo.png" }) {
          childImageSharp {
            fixed(height: 660) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img style={{height:125.7, width:222.5}} alt="ORI Solutions" fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)
export default LogoMalo