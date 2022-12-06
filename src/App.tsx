import React from "react";
import { useEffect, useState } from "react";
import { ChangeEvent } from "react";

import "./App.css";

function App() {
  const [change, setChange] = useState({
    triangleSize: 130,
    triangleColor: "red",
    squareSize: 120,
    squareColor: "blue",
    circleSize: 110,
    circleColor: "green",
  });

  const {
    triangleSize,
    triangleColor,
    squareSize,
    squareColor,
    circleSize,
    circleColor,
  } = change;

  useEffect(() => {
    if (triangleSize === circleSize && triangleSize === squareSize) {
      alert("todos los tamaños son iguales");
    }
  }, [circleSize, squareSize, triangleSize]);

  useEffect(() => {
    if (triangleColor === circleColor && triangleColor === squareColor) {
      alert("todos los colores son iguales");
    }
  }, [circleColor, squareColor, triangleColor]);

  const style_triangle = {
    margin: "20px",
    width: "0",
    borderBottom: `${triangleSize}px solid ${triangleColor}`,
    borderLeft: `${triangleSize / 1.8}px solid transparent`,
    borderRight: `${triangleSize / 1.8}px solid transparent`,
  };

  const style_square = {
    margin: "20px",
    width: `${squareSize}px`,
    height: `${squareSize}px`,
    backgroundColor: squareColor,
  };

  const style_circle = {
    margin: "20px",
    width: `${circleSize}px`,
    height: `${circleSize}px`,
    backgroundColor: circleColor,
    borderRadius: "50%",
  };

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setChange({
      ...change,
      [event.target.name]: value,
    });
  }

  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <label>
        Tamaño del triangulo
        <input name="triangleSize" type="number" onChange={handleChange} />
      </label>
      <label>
        Color del triangulo
        <input name="triangleColor" type="color" onChange={handleChange} />
      </label>
      <div style={style_triangle} className="triangle"></div>

      <label>
        Tamaño del cuadrado
        <input name="squareSize" type="number" onChange={handleChange} />
      </label>
      <label>
        Color del cuadrado
        <input name="squareColor" type="color" onChange={handleChange} />
      </label>
      <div style={style_square} className="square"></div>

      <label>
        Tamaño del circulo
        <input name="circleSize" type="number" onChange={handleChange} />
      </label>
      <label>
        Color del circulo
        <input name="circleColor" type="color" onChange={handleChange} />
      </label>
      <div style={style_circle} className="circle"></div>
    </div>
  );
}

export default App;
