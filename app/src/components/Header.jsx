import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
  const { title } = props;
  return (
    <div className="sticky w-full p-4 text-lg uppercase font-semibold text-center">
      {title}
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

Header.defaultProps = {
  title: 'Plugs'
}

export default Header