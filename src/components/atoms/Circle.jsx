import React from 'react'
import PropTypes from 'prop-types'

function Circle({ size, color }) {
  return (
    <svg height={size} width={size}>
      <circle cx={size / 2} cy={size / 2} r={size / 2} fill={color} />
    </svg>
  )
}

Circle.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  color: PropTypes.string.isRequired,
}

export default Circle
