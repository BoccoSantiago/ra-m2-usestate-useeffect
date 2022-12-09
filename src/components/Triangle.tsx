import React from "react";

function Triangle({ size, color, handleChange }) {
  const style_triangle = {
    margin: "20px",
    width: "0",
    borderBottom: `${size}px solid ${color}`,
    borderLeft: `${size / 1.75}px solid transparent`,
    borderRight: `${size / 1.75}px solid transparent`,
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <label>
        Tamaño del triangulo
        <input
          name="triangleSize"
          value={size}
          type="number"
          onChange={handleChange}
        />
      </label>
      <label>
        Color del triangulo
        <input
          name="triangleColor"
          value={color}
          type="color"
          onChange={handleChange}
        />
      </label>
      <div style={style_triangle} className="triangle"></div>
    </div>
  );
}

export default Triangle;
