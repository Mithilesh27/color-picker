import { useState } from "react";
import "./App.css";

export default function App() {
  const colorOptions = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
    "pink",
    "teal",
    "cyan",
    "chocolate",
    "wheat",
    "lime",
  ];
  const [selectedColor, setSelectedColor] = useState("black");
  const [opacityValue, setOpacityValue] = useState(0);
  const handleColor = (color) => {
    setSelectedColor(color);
    setOpacityValue(0);
  };
  const handleOpacity = () => {
    setOpacityValue(1);
  };
  const colorItems = colorOptions.map((color, index) => (
    <li
      className="color-box"
      key={index}
      style={{ backgroundColor: color }}
      onClick={() => handleColor(color)}
    ></li>
  ));
  return (
    <div className="color-picker">
      <div className="container">
        <h2>Color Picker</h2>
        <ul className="color-list" style={{ opacity: opacityValue }}>
          {colorItems}
        </ul>
        <button
          style={{ backgroundColor: selectedColor }}
          onClick={handleOpacity}
        >
          Pick a color
        </button>
      </div>
    </div>
  );
}
