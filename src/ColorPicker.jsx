import { useState } from "react";
function ColorPicker() {
  const [color, setcolor] = useState("#FFFFFF");
  const handleColor = (e) => {
    setcolor(e.target.value);
  };

  return (
    <>
      <div className="color-picker-container">
        <h1>Color Picker</h1>
        <div className="color-display" style={{ backgroundColor: color }}>
          <p>Selected Color: {color}</p>
        </div>
        <label htmlFor="">Select A Color:</label>
        <input
          type="color"
          name=""
          value={color}
          onChange={handleColor}
          id=""
        />
      </div>
    </>
  );
}

export default ColorPicker;
