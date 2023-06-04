import React from "react";
import "./Label.scss";
function Label({ children, isActive = false, ...props }) {
  return (
    <div className={isActive ? "label active" : "label"} {...props}>
      {children}
    </div>
  );
}

export default Label;
