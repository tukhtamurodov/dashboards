import React from "react";
import './Partner.scss'
import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";
import MyButton from "../../components/MyButton/MyButton";

function Partner() {
  return (
    <Container title={"Hamkor brendlar"}>
      <div className="partner">
        <div className="partner__logo-upload">
          <Logo />
        </div>
        <div className="partner__btn">
          <MyButton>Qo'shish</MyButton>
        </div>
        <hr className="partner__hr" />
        <div className="partner__logos">
          {new Array(18).fill('logo').map((item,index) =>{
             return(
            <div key={index} className="partner__logo">Logo</div>
          )})}
        </div>
      </div>
    </Container>
  );
}

export default Partner;
