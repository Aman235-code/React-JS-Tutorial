import React, { useState } from "react";

// OnChange = event handler used primarily with form elements
// eg: input, textarea, select, radio traiigers a fundc every time the val of ip changes

// updater func -  A func passed as an arg to setState() usually ex ReadableStreamBYOBReader(year+1)
// allow for safe updates based on prev state Used with multiple state updates and asunc func
// Good practise to use updater func

function MyComponent() {
  // const [name, setName] = useState("Guest");
  // const [age, setAge] = useState(0);
  // const [isEmployed, setIsEmployed] = useState(false);
  const [name, setname] = useState("Guest");
  const [quantity, setquantity] = useState(1);
  const [comment, setcomment] = useState("");
  const [payment, setpayment] = useState("Visa");
  const [shipping, setshipping] = useState("");
  const [car, setcar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });
  function HandleYearCh(event) {
    setcar((car) => ({ ...car, year: event.target.value }));
  }
  function HandleMakeCh(event) {
    setcar((car) => ({ ...car, make: event.target.value }));
  }
  function HandleModelCh(event) {
    setcar((car) => ({ ...car, model: event.target.value }));
  }
  function handleNamechange(event) {
    setname(event.target.value);
  }

  const handleQuantity = (event) => {
    setquantity(event.target.value);
  };

  const handleComment = (event) => {
    setcomment(event.target.value);
  };

  const handlePayment = (event) => {
    setpayment(event.target.value);
  };

  const handleShipping = (event) => {
    setshipping(event.target.value);
  };
  // const updateName = () => {
  //   setName("Aman");
  // };
  // const incAge = () => {
  //   setAge(age + 2);
  // };
  // const toggleEmployed = () => {
  //   setIsEmployed(!isEmployed);
  // };
  return (
    <div>
      {/* <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incAge}>Increment Age</button>

      <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployed}>Toggle Employed</button> */}
      {/* 
      <input type="text" value={name} onChange={handleNamechange} />
      <p>Name: {name}</p>

      <input
        type="number"
        name=""
        value={quantity}
        id=""
        onChange={handleQuantity}
      />
      <p>Quantity: {quantity}</p>

      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={handleComment}
        value={comment}
        placeholder="Enter Delivery instructions...."
      ></textarea>
      <p>Comment: {comment}</p>

      <select name="" id="" value={payment} onChange={handlePayment}>
        <option value="">Select An Option</option>
        <option value="visa">Visa</option>
        <option value="mastercard">MasterCard</option>
        <option value="giftcard">Gift Card</option>
      </select>
      <p>Payment {payment}</p>

      <label htmlFor="">
        <input
          type="radio"
          value="Pick Up"
          name=""
          id=""
          checked={shipping === "Pick Up"}
          onChange={handleShipping}
        />
        Pick Up
      </label>
      <br />
      <label htmlFor="">
        <input
          type="radio"
          value="Delivery"
          name=""
          id=""
          checked={shipping === "Delivery"}
          onChange={handleShipping}
        />
        Delivery
      </label>
      <p>Shipping : {shipping}</p> */}

      <p>
        Car is: {car.year} {car.make} {car.model}
        <br />
        <input
          type="number"
          onChange={HandleYearCh}
          name=""
          value={car.year}
          id=""
        />
        <br />
        <input
          type="text"
          onChange={HandleMakeCh}
          name=""
          value={car.make}
          id=""
        />
        <br />
        <input
          type="text"
          onChange={HandleModelCh}
          name=""
          value={car.model}
          id=""
        />
        <br />
      </p>
    </div>
  );
}

export default MyComponent;
