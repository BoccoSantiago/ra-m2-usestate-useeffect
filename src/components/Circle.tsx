import React from "react";

function Circle({ size, color, handleChange }) {
  const style_circle = {
    margin: "20px",
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
    borderRadius: "50%",
  };
  return (
    <div>
      <label>
        Tamaño del circulo
        <input
          name="circleSize"
          value={size}
          type="number"
          onChange={handleChange}
        />
      </label>
      <label>
        Color del circulo
        <input
          name="circleColor"
          value={color}
          type="color"
          onChange={handleChange}
        />
      </label>
      <div style={style_circle} className="circle"></div>
    </div>
  );
}

export default Circle;
