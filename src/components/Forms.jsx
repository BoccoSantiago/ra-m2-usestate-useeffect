/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react'
import Square from './atoms/Square'
import Triangle from './atoms/Triangle'
import Circle from './atoms/Circle'
import InputColor from './atoms/InputColor'
import InputNumber from './atoms/InputNumber'
import Label from './atoms/Label'

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
      alert('Todos los tamaños son iguales')
    }
  }, [circleSize, squareSize, triangleSize])

  useEffect(() => {
    if (triangleColor == circleColor && triangleColor == squareColor) {
      alert('Todos los colores son iguales')
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
          gap: '10px',
        }}
      >
        <Label htmlFor="triangleSize" title="triangle size: ">
          <InputNumber
            name="triangleSize"
            size={triangleSize}
            onChange={handleChange}
          />
        </Label>
        <Label htmlFor="triangleColor" title="triangle color: ">
          <InputColor
            name="triangleColor"
            color={triangleColor}
            onChange={handleChange}
          />
        </Label>
        <Triangle name="triangle" size={triangleSize} color={triangleColor} />

        <Label htmlFor="squareSize" title="Square size: ">
          <InputNumber
            name="squareSize"
            size={squareSize}
            onChange={handleChange}
          />
        </Label>
        <Label htmlFor="squareColor" title="Square color: ">
          <InputColor
            name="squareColor"
            color={squareColor}
            onChange={handleChange}
          />
        </Label>
        <Square name="square" size={squareSize} color={squareColor} />

        <Label htmlFor="circleSize" title="Circle size: ">
          <InputNumber
            name="circleSize"
            size={circleSize}
            onChange={handleChange}
          />
        </Label>
        <Label htmlFor="circleColor" title="Circle color: ">
          <InputColor
            name="circleColor"
            color={circleColor}
            onChange={handleChange}
          />
        </Label>
        <Circle name="circle" size={circleSize} color={circleColor} />
      </div>
    </div>
  )
}

export default Forms
