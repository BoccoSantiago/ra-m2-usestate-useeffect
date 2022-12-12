import React from 'react'
import PropTypes from 'prop-types'

function Square({ size, color }) {
  return (
    <svg width={size} height={size}>
      <rect
        width={size}
        height={size}
        style={{
          fill: `${color}`,
        }}
      />
    </svg>
  )
}

Square.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  color: PropTypes.string.isRequired,
}

export default Square
