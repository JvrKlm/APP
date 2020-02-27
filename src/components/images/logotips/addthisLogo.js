import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AddthisLogoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logotips/addthis-logo.png" }) {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img alt="Addthis Logo" title="Addthis" fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)
export default AddthisLogoImage
