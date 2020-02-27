import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ShopifyLogoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logotips/shopify-logo.png" }) {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img alt="Shopify Logo" title="Shopify online builder" fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)
export default ShopifyLogoImage
