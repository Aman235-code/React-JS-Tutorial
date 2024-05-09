import React, { useState } from "react";

function UpdateObjects() {
  const [foods, setfoods] = useState(["Apple", "Orange", "Banana"]);
  function handleAddFood() {
    const nf = document.getElementById("fi").value;
    console.log(nf);
    document.getElementById("fi").value = "";
    setfoods([...foods, nf]);
  }

  function handleRemoveFood(index) {
    setfoods(foods.filter((_, i) => i !== index));
  }
  return (
    <div>
      <h2>List of Foods</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="fi" placeholder="fname" />
      <button onClick={handleAddFood}>Add</button>
    </div>
  );
}

export default UpdateObjects;
