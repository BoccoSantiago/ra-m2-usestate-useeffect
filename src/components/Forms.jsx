/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react'
import Square from './Square'
import Triangle from './Triangle'
import Circle from './Circle'

function Forms() {
  const [change, setChange] = useState({
    triangleSize: 130,
    triangleColor: '#FF0000',
    squareSize: 120,
    squareColor: '#08FFFF',
    circleSize: 110,
    circleColor: '#04FF00',
  })

  const {
    triangleSize,
    triangleColor,
    squareSize,
    squareColor,
    circleSize,
    circleColor,
  } = change

  function handleChange(event) {
    const { value } = event.target
    setChange({
      ...change,
      [event.target.name]: value,
    })
  }

  useEffect(() => {
    if (triangleSize == circleSize && triangleSize == squareSize) {
      alert('todos los tamaños son iguales')
    }
  }, [circleSize, squareSize, triangleSize])

  useEffect(() => {
    if (triangleColor == circleColor && triangleColor == squareColor) {
      alert('todos los colores son iguales')
    }
  }, [circleColor, squareColor, triangleColor])

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Tarea useState y useEffect</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Triangle
          size={triangleSize}
          color={triangleColor}
          handleChange={handleChange}
        />
        <Square
          size={squareSize}
          color={squareColor}
          handleChange={handleChange}
        />
        <Circle
          size={circleSize}
          color={circleColor}
          handleChange={handleChange}
        />
      </div>
    </div>
  )
}

export default Forms
