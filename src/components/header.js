import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ListLink from './listlink'

const whatDo = [
  "I smash my head against a keyboard for 8 hours a day",
  "I blabber on about coffee and javascript",
  "I constantly ask people if they want to go bouldering",
  "I am a front end dev",
]
const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      background: `#DFAAD3`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `5.45rem 1.0875rem`,
      }}
    >
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      {/* <h3 style={{ color: `white` }}>
        {whatDo[Math.floor(Math.random() * 3)]}
      </h3> */}
      <nav>
        <ListLink to="/about">About</ListLink>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
