import React from 'react'
import PropTypes from 'prop-types'

function Label({ htmlFor, title, children }) {
  return (
    <label htmlFor={htmlFor}>
      {title}
      {children}
    </label>
  )
}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Label
