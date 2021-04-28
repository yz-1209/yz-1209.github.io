import * as React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  let listLinks

  if (isRootPath) {
    header = (
      // <h3 className="main-heading">
      //   <Link to="/">{title}</Link>
      // </h3>
      <h1 style={{display: `inline`}}>
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  listLinks = (
    <ul style={{ listStyle: `none`, float: `right`, margin: `auto`}}>
      <ListLink to="/">Posts</ListLink>
      <ListLink to="/about/">About</ListLink>
    </ul>
  )
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header" >{header}{listLinks}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
