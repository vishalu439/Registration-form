import React, { useState } from "react";
import "./App.css";
import SuccessModal from "./Components/SuccessModal";

const App = () => {
  const [input, setinput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showModal, setShowModal] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input);
    setShowModal(true);
  };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setinput({
      ...input,
      [name]: value,
    });
  };

  const closeModal = () => {
    // Close the modal and reset the form
    setShowModal(false);
    setinput({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <>
      <h1>Registration Form</h1>
      <div className="container">
        <form onSubmit={submitHandler}>
          <div className="subContainer">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={input.name}
              onChange={onChangeHandler}
            />
          </div>
          <div className="subContainer">
            <label id="email" htmlFor="email">
              Email:
            </label>
            <input
              type="text"
              name="email"
              value={input.email}
              onChange={onChangeHandler}
            />
          </div>
          <div className="subContainer">
            <label id="password" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={onChangeHandler}
            />
          </div>

          <button type="submit">submit</button>
        </form>
      </div>
      {showModal && <SuccessModal onClose={closeModal} />}
    </>
  );
};

export default App;
