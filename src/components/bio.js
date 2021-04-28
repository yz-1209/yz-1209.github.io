/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <div>
          <p>
            This is <strong>{author.name}</strong>. {author?.summary || null}{` `}
          </p>
          <p>
            You can follow me on &nbsp; 
            <a href={`https://twitter.com/${social?.twitter || ``}`}>
              Twitter
            </a>
            &nbsp; and &nbsp;
            <a href={`https://github.com/${social?.github || ``}`}>
              Github.
            </a>
          </p>
        </div>
      )}
    </div>
  )
}

export default Bio
