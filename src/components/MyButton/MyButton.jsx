import React from "react";
import "./MyButton.scss";
function MyButton({ children, onChange, ...props }) {
  return (
    <button {...props} className="my-btn" onChange={onChange}>
      children
    </button>
  );
}

export default MyButton;
