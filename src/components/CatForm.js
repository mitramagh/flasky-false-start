import "./CatForm.css";
import PropTypes from "prop-types";
import { useState } from "react";
import React from "react";

const defaultCat = { name: "", age: 0, saying: "", color: "" };

const CatFrom = (props) => {
  const [catData, setCatData] = useState(defaultCat);

  const handleFormInput = (event) => {
    const inputElement = event.target;
    const name = inputElement.name;
    const value = inputElement.value;

    const newCatData = { ...catData };
    newCatData[name] = value;
    console.log(newCatData);
    setCatData(newCatData);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    props.handleSubmission(catData);
  };
  return (
    <form onSubmit={handleFormSubmission}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={catData.name}
        onChange={handleFormInput}
      ></input>
      <label>Age</label>
      <input
        type="text"
        name="age"
        value={catData.age}
        onChange={handleFormInput}
      ></input>
      <label>Saying</label>
      <input
        type="text"
        name="saying"
        value={catData.saying}
        onChange={handleFormInput}
      ></input>
      <label>Color</label>
      <input
        type="text"
        name="color"
        value={catData.color}
        onChange={handleFormInput}
      ></input>
      <input type="submit" />
    </form>
  );
};

CatFrom.propTypes = {
  handleSubmission: PropTypes.func.isRequired,
};

export default CatFrom;
