import React from "react";
import "./PaginationBtn.scss";
function PaginationBtn({ value, isActive, ...props }) {
  return (
    <div
      className={isActive ? "pagination-btn" : "pagination-btn active"}
      {...props}
    >
      {value}
    </div>
  );
}

export default PaginationBtn;
