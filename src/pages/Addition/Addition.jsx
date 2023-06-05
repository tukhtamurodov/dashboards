import React from "react";
import Container from "../../components/Container/Container";
import Label from "../../components/Label/Label";
import MyInput from "../../components/MyInput/MyInput";
import "./Addition.scss";
import MyTextarea from "../../components/MyTextarea/MyTextarea";
import ImgUpload from "../../components/ImgUpload/ImgUpload";
import MyButton from "../../components/MyButton/MyButton";
function Addition() {
  return (
    <Container title={"Koshimchalar"}>
      <div className="addition">
        <div className="addition__brand-name">
          <Label>Brand nomi</Label>
          <MyInput placeholder={"TEMUR"} />
        </div>
        <div className="addition__upload">
          <ImgUpload />
        </div>
        <div className="addition__row">
          <div className="addition__section">
            <div className="addition__item">
              <Label isActive={true}>Mahsulot nomi</Label>
              <MyInput isActive={true} placeholder={"TEMUR"} />
            </div>
            <div className="addition__item">
              <Label isActive={false}>Rangi</Label>
              <MyInput isActive={false} placeholder={"Ismingiz"} />
            </div>
            <div className="addition__item">
              <Label>Izoh koldirish</Label>
              <MyTextarea placeholder={"Izoh koldirish"} />
            </div>
          </div>

          <div className="addition__section">
            <div className="addition__item">
              <Label isActive={true}>Mahsulot nomi</Label>
              <MyInput isActive={true} placeholder={"TEMUR"} />
            </div>
            <div className="addition__item">
              <Label isActive={false}>Rangi</Label>
              <MyInput isActive={false} placeholder={"Ismingiz"} />
            </div>
            <div className="addition__item">
              <Label>Izoh koldirish</Label>
              <MyTextarea placeholder={"Izoh koldirish"} />
            </div>
          </div>

          <div className="addition__section">
            <div className="addition__item">
              <Label isActive={true}>Mahsulot nomi</Label>
              <MyInput isActive={true} placeholder={"TEMUR"} />
            </div>
            <div className="addition__item">
              <Label isActive={false}>Rangi</Label>
              <MyInput isActive={false} placeholder={"Ismingiz"} />
            </div>
            <div className="addition__item">
              <Label>Izoh koldirish</Label>
              <MyTextarea placeholder={"Izoh koldirish"} />
            </div>
          </div>
        </div>
        <div className="addition__btn">
          <MyButton>Qo'shish</MyButton>
        </div>
      </div>
    </Container>
  );
}

export default Addition;
