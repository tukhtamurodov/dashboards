import React from "react";
import Container from "../../components/Container/Container";
import "./Products.scss";
import Label from "../../components/Label/Label";
import MyInput from "../../components/MyInput/MyInput";
import MySelect from "../../components/MySelect/MySelect";
import MyTextarea from "../../components/MyTextarea/MyTextarea";
let data = [
  { title: "Product", value: "product" },
  { title: "Sales", value: "sales" },
  { title: "Category", value: "category" },
];
function Products() {
  return (
    <Container title={"Tavar qoshish"}>
      <div className="products">
        <Label isActive={true}>asdasdasda</Label>
        <Label isActive={false}>asdasdasda</Label>
        <MyInput isActive={true} placeholder={"elshodbek"} />
        <MyInput isActive={false} placeholder={"elshodbek"} />
        <MySelect options={data} />
        <MySelect isActive={true} options={data} />
        <MyTextarea placeholder={'Оставить комментарий'} />
        
      </div>
    </Container>
  );
}

export default Products;
