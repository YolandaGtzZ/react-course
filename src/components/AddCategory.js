import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState("");

  const handleInputChange = (e) => {
    setinputValue(e.target.value);

    console.log("HandleInputChange llamado");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit');

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setinputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </div>
    </form>
  );
};

AddCategory.protoTypes = {
  setCategories: PropTypes.func.isRequired,
};
