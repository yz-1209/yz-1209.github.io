import React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import Bio from "../components/bio"
import Seo from "../components/seo"

export default function About({ data, location }) {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="About"/>
            <Bio/>
        </Layout>
    )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
