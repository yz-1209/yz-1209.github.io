import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const header = (
    <Link className="main-heading" to="/">
      {title}
    </Link>
  )

  const listLinks = (
    <ul className="navigation-bar">
      <li><Link to="/">Posts</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><a href="/rss.xml">Rss</a></li>
    </ul>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header" >{header}{listLinks}</header>
      <main>{children}</main>
      <footer className="global-footer">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
