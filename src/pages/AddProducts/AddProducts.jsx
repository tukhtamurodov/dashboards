import React from "react";
import Container from "../../components/Container/Container";
import Label from "../../components/Label/Label";
import MyInput from "../../components/MyInput/MyInput";
import "./AddProducts.scss";
import ImgUpload from "../../components/ImgUpload/ImgUpload";
import MySelect from "../../components/MySelect/MySelect";
import ProductUi from "../../components/Product/ProductUi";
import pen from "./../../images/pen.jpg";
import MyTextarea from "../../components/MyTextarea/MyTextarea";
import MyButton from "../../components/MyButton/MyButton";
function AddProducts() {
  return (
    <Container title={"Tavar qoshish"}>
      <div className="add-product">
        <div className="add-product__row">
          <div className="left">
            <Label>Brand nomi</Label>
            <MyInput placeholder={"TEMUR"} />
            <ImgUpload style={{ marginTop: "48px" }} />
          </div>
          <div className="right">
            <div className="sub-title">Koshimchalar</div>
            <div className="right__row">
              <div className="right__category">
                <Label>Kategoriya</Label>
                <MySelect value={"Kategoriya"} />
              </div>
              <div className="right__product">
                <Label>Mahsulot nomi</Label>
                <MySelect value={"Mahsulot nomi"} />
              </div>
            </div>
            <div className="right__products">
              <ProductUi img={pen} trash={"white"} text={"Ruchka"} />
              <ProductUi img={pen} trash={"red"} text={"Ruchka"} />
              <ProductUi img={pen} text={"Ruchka"} />
              <ProductUi img={pen} text={"Ruchka"} />
              <ProductUi img={pen} text={"Ruchka"} />
              <ProductUi img={pen} text={"Ruchka"} />
              <ProductUi img={pen} text={"Ruchka"} />
              <ProductUi img={pen} text={"Ruchka"} />
              <ProductUi img={pen} text={"Ruchka"} />
            </div>
          </div>
        </div>
        <div className="set-product">
          <div className="section">
            <div className="item">
              <Label>Mahsulot nomi</Label>
              <MyInput isActive={true} placeholder={"TEMUR"} />
            </div>
            <div className="item">
              <Label isActive={false}>Kategoriya</Label>
              <MySelect />
            </div>
            <div className="item">
              <Label isActive={false}>Rangi</Label>
              <MyInput isActive={true} placeholder={"TEMUR"} />
            </div>
            <div className="item">
              <Label>Izoh koldirish</Label>
              <MyTextarea placeholder={"Izoh koldirish"} />
            </div>
          </div>
          <div className="section">
            <div className="item">
              <Label>Mahsulot nomi</Label>
              <MyInput isActive={true} placeholder={"TEMUR"} />
            </div>
            <div className="item">
              <Label isActive={false}>Kategoriya</Label>
              <MySelect />
            </div>
            <div className="item">
              <Label isActive={false}>Rangi</Label>
              <MyInput isActive={true} placeholder={"TEMUR"} />
            </div>
            <div className="item">
              <Label>Izoh koldirish</Label>
              <MyTextarea placeholder={"Izoh koldirish"} />
            </div>
          </div>
          <div className="section">
            <div className="item">
              <Label>Mahsulot nomi</Label>
              <MyInput isActive={true} placeholder={"TEMUR"} />
            </div>
            <div className="item">
              <Label isActive={false}>Kategoriya</Label>
              <MySelect />
            </div>
            <div className="item">
              <Label isActive={false}>Rangi</Label>
              <MyInput isActive={true} placeholder={"TEMUR"} />
            </div>
            <div className="item">
              <Label>Izoh koldirish</Label>
              <MyTextarea placeholder={"Izoh koldirish"} />
            </div>
          </div>
        </div>
        <div className="btn-wrap">
          <MyButton>Qo'shish</MyButton>
        </div>
      </div>
    </Container>
  );
}

export default AddProducts;
