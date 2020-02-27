import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MailchimpLogoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logotips/mailchimp-logo.png" }) {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img alt="Mailchimp Logo" title="Mailchimp" fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)
export default MailchimpLogoImage
