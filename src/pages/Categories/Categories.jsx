import React from "react";
import './Categories.scss'
import Container from "../../components/Container/Container";
import ImgUpload from "../../components/ImgUpload/ImgUpload";
import Label from "../../components/Label/Label";
import MyInput from "../../components/MyInput/MyInput";
import MyButton from "../../components/MyButton/MyButton";

function Categories() {
  return (
    <Container title={"Kategoriya"}>
      <div className="categories">
        <div className="categories__upload">
          <ImgUpload />
        </div>
        <div className="categories__row">
          <div className="categories__section">
            <Label>Kategoriya</Label>
            <MyInput placeholder={"Kategoriya"} />
          </div>
          <div className="categories__section">
            <Label>Категория</Label>
            <MyInput placeholder={"Категория"} />
          </div>
          <div className="categories__section">
            <Label>Category</Label>
            <MyInput placeholder={"Category"} />
          </div>
        </div>
        <div className="categories__btn">
          <MyButton>Qo'shish</MyButton>
        </div>
        <hr className="categories__hr" />
      </div>
    </Container>
  );
}

export default Categories;
