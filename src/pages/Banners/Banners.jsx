import React from "react";
import Container from "../../components/Container/Container";
import "./Banners.scss";
import PaginationBtn from "../../components/PaginationBtn/PaginationBtn";
import Label from "../../components/Label/Label";
import UploadBanner from "../../components/UploadImg/UploadImg";
import pluss from "./../../images/atir1.jpg";
import MySelect from "../../components/MySelect/MySelect";

function Banners() {
  let activePage = 2;
  const forSelect =[
    {value:'category1',title:'category1'},
    {value:'category2',title:'category2'},
    {value:'category3',title:'category3'},
  ]
  return (
    <Container title={"Bannerlar"}>
      <div className="banerlar">
        <div className="banerlar__pagination">
          {[1, 2, 3].map((item) => (
            <PaginationBtn
              isActive={activePage === item}
              value={item}
              key={item}
            />
          ))}
        </div>
        <div className="banerlar__main-img">
          <Label>Asosiy banner</Label>
          <UploadBanner />
        </div>
        <div className="banerlar__small-img">
          <Label>Reklama banner</Label>
          <div className="banerlar__row">
            <UploadBanner img={pluss} />
            <UploadBanner img={pluss} />
          </div>
        </div>
        <div className="banerlar__selects">
        
          <div className="banerlar__item">
            <Label>Kategoriya</Label>
          <MySelect options={forSelect} />
          </div>
          <div className="banerlar__item">
            <Label>Mahsulot nomi</Label>
          <MySelect options={forSelect} />
          </div>
          <div className="banerlar__item">
            <Label>Kategoriya</Label>
          <MySelect options={forSelect} />
          </div>
          <div className="banerlar__item">
            <Label>Mahsulot nomi</Label>
          <MySelect options={forSelect} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Banners;
