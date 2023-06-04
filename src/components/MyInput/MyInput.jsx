import React from "react";
import "./MyInput.scss";
function MyInput({ placeholder, isActive, value, onChange }) {
  return (
    <input
      className={isActive ? "my-input active" : "my-input"}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default MyInput;
