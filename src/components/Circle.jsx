import React from 'react'
import PropTypes from 'prop-types'

// Esta bien traido, pero te voy a pedir lo siguiente:
// 1. Que crees una carpeta de atoms
// 2. Que muevas Label a atoms y sea un componente con sus PropTypes.
// 3. Que muevas InputColor e InputNumber a atoms y sea un componente con sus PropTypes.
// 4. Que muevas Circle, Triangle, Square a atoms y sea un componente con sus PropTypes que devuelvan un SVG en lugar de un div con CSS.
// Te lo pido, no porque no funcione, sino porque la estructura es fundamental para escalar proyectos, testear, corregir errores, etc...
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
