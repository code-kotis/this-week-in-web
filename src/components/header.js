import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Newsletter from './newsletter'

const Header = ({ siteTitle }) => (
  <header>
    <h1>
      <Link to="/">this week in web</Link>
    </h1>
    <Newsletter />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
