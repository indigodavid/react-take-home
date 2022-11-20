import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
  const { title } = props;
  return (
    <div className="w-full p-4 text-lg uppercase font-bold text-center">
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