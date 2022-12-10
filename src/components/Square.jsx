import React from 'react'
import PropTypes from 'prop-types'

function Square({ size, color, handleChange }) {
  const styleSquare = {
    margin: '20px',
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
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
      <label htmlFor="square">
        Tamaño del cuadrado
        <input
          name="squareSize"
          value={size}
          type="number"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="square">
        Color del cuadrado
        <input
          name="squareColor"
          value={color}
          type="color"
          onChange={handleChange}
        />
      </label>
      <div style={styleSquare} />
    </div>
  )
}

Square.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Square
