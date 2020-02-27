import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AwsLogoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logotips/aws-logo.png" }) {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img alt="AWS Logo" title="Amazon Web Services" fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)
export default AwsLogoImage
