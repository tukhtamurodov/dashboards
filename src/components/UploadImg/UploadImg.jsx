import React from "react";
import "./UploadImg.scss";
import pluss from "./../../images/big-pluss.svg";
function UploadBanner({ img, onClick }) {
  return (
    <div onClick={onClick} className="upload-banner">
      <img className="upload-banner__pluss" src={pluss} alt="plus" />
      {img && <img className="upload-banner__img" src={img} alt="img" />}
    </div>
  );
}

export default UploadBanner;
