import React from "react";
import Container from "../../components/Container/Container";
import "./Products.scss";
import Label from "../../components/Label/Label";
import MyInput from "../../components/MyInput/MyInput";
import MySelect from "../../components/MySelect/MySelect";
import MyTextarea from "../../components/MyTextarea/MyTextarea";
import PaginationBtn from "../../components/PaginationBtn/PaginationBtn";
import ImgUpload from "../../components/ImgUpload/ImgUpload";
import img from "./../../images/atir1.jpg";
import MyButton from "../../components/MyButton/MyButton";
import ProductUi from "../../components/Product/ProductUi";
import pen from './../../images/pen.jpg'
let data = [
  { title: "Product", value: "product" },
  { title: "Sales", value: "sales" },
  { title: "Category", value: "category" },
];
function Products() {
  return (
    <Container title={"Tavar qoshish"}>
      <div className="products">
        {/* <Label isActive={true}>asdasdasda</Label>
        <Label isActive={false}>asdasdasda</Label>
        <MyInput isActive={true} placeholder={"elshodbek"} />
        <MyInput isActive={false} placeholder={"elshodbek"} />
        <MySelect options={data} />
        <MySelect isActive={true} options={data} />
        <MyTextarea placeholder={"Оставить комментарий"} />
        <PaginationBtn isActive={true} value={1} />
        <PaginationBtn isActive={false} value={1} /> */}
        <ImgUpload height={"200px"} img={img} />
        <MyButton>nimgap</MyButton>
        <ProductUi img={pen} text={'heloo taskent'} trash={'white'} />
        <ProductUi img={pen} text={'heloo taskent'} trash={'red'} />
        <ProductUi img={pen} text={'heloo taskent'} />
      </div>
    </Container>
  );
}

export default Products;
