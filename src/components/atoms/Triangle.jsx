import React from 'react'
import PropTypes from 'prop-types'

function Triangle({ size, color }) {
  return (
    <svg id="triangle" width={size} height={size}>
      <polygon
        points={`${size / 2},0 0,${size} ${size},${size}`}
        fill={color}
      />
    </svg>
  )
}

Triangle.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  color: PropTypes.string.isRequired,
}

export default Triangle
