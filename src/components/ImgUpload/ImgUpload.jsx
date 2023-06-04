import React from "react";
import "./ImgUpload.scss";
import plus from './../../images/pluss.svg'
function ImgUpload({ img, onClick, ...props }) {
  return (
    <div  {...props} className="img-upload">
      <div onClick={onClick} className="img-upload__btn">
        <img src={plus} alt="plus" />
      </div>
      <div className="img-upload__img">
        {img && <img src={img} alt={"img"} />}
      </div>
    </div>
  );
}

export default ImgUpload;
