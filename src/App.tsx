import React from "react";
import "./App.css";
import Forms from "./components/Forms";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <Forms />
    </div>
  );
}

export default App;
