import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ServicesTaImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "services-ta.png" }) {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default ServicesTaImage