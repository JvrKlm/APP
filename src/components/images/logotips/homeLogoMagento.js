import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MagentoLogoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logotips/magento-logo-home.png" }) {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img alt="Magento Logo" title="Magento CMS" fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)
export default MagentoLogoImage
