import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MagentoLogoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logotips/magento-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img alt="Magento Logo" title="Magento" fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default MagentoLogoImage
