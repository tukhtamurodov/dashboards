import React from "react";
import "./Container.scss";
function Container({ title, children }) {
  return (
    <div className="container">
      <hr />
      <h1 className="container-title">{title}</h1>
      <div className="container-content">{children}</div>
    </div>
  );
}

export default Container;
