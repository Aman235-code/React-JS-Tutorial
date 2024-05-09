import React, { useState } from "react";

export default function UpdateArrayOjects() {
  const [cars, setcars] = useState([]);
  const [year, setyear] = useState(new Date().getFullYear());
  const [make, setmake] = useState("");
  const [model, setmodel] = useState("");
  function handleAddCar() {
    setcars([...cars, { year, make, model }]);
  }
  function handleRemoveCar(index) {
    setcars(cars.filter((_, i) => i !== index));
  }
  function handleYearCar(event) {
    setyear(event.target.value);
  }
  function handleMakeCar(event) {
    setmake(event.target.value);
  }
  function handleModelCar(event) {
    setmodel(event.target.value);
  }
  return (
    <div>
      <h2>List of Car Objects</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <input
        type="number"
        name=""
        value={year}
        onChange={handleYearCar}
        id=""
      />
      <input
        type="text"
        name=""
        value={make}
        onChange={handleMakeCar}
        id=""
        placeholder="Car Make"
      />
      <input
        type="text"
        name=""
        value={model}
        onChange={handleModelCar}
        id=""
        placeholder="Car Model"
      />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}
