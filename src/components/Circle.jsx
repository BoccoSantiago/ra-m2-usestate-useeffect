import React from 'react'
import PropTypes from 'prop-types'

function Circle({ size, color, handleChange }) {
  const styleCircle = {
    margin: '20px',
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
    borderRadius: '50%',
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
      <label htmlFor="circle">
        Tamaño del circulo
        <input
          name="circleSize"
          value={size}
          type="number"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="circle">
        Color del circulo
        <input
          name="circleColor"
          value={color}
          type="color"
          onChange={handleChange}
        />
      </label>
      <div style={styleCircle} />
    </div>
  )
}

Circle.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Circle
