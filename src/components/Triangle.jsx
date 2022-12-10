import React from 'react'
import PropTypes from 'prop-types'

function Triangle({ size, color, handleChange }) {
  const styleTriangle = {
    margin: '20px',
    width: '0',
    borderBottom: `${size}px solid ${color}`,
    borderLeft: `${size / 1.75}px solid transparent`,
    borderRight: `${size / 1.75}px solid transparent`,
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '10px',
      }}
    >
      <label htmlFor="triangle">
        Tamaño del triangulo
        <input
          name="triangleSize"
          value={size}
          type="number"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="triangle">
        Color del triangulo
        <input
          name="triangleColor"
          value={color}
          type="color"
          onChange={handleChange}
        />
      </label>
      <div style={styleTriangle} />
    </div>
  )
}

Triangle.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Triangle
