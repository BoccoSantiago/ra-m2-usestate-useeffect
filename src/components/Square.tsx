import React from "react";

function Square({ size, color, handleChange }) {
  const style_square = {
    margin: "20px",
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
  };
  return (
    <div>
      <label>
        Tamaño del cuadrado
        <input
          name="squareSize"
          value={size}
          type="number"
          onChange={handleChange}
        />
      </label>
      <label>
        Color del cuadrado
        <input
          name="squareColor"
          value={color}
          type="color"
          onChange={handleChange}
        />
      </label>
      <div style={style_square} className="square"></div>
    </div>
  );
}

export default Square;
