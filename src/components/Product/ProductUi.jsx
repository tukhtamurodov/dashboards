import React from "react";
import "./ProductUi.scss";
import red from "./../../images/trash-red.svg";
import white from "./../../images/trash.svg";
function ProductUi({ img, trash, text, ...props }) {
  return (
    <div className="product-ui" {...props}>
      {trash && (
        <div className="trash">
          {trash === "red" ? (
            <img src={red} alt="trash" />
          ) : (
            <img src={white} alt="trash" />
          )}
        </div>
      )}
      <div className="product-ui__row">
        <div className="img">
          <img src={img} alt="img" />
        </div>
        <div className="text">
          {text}
        </div>
      </div>
    </div>
  );
}

export default ProductUi;
