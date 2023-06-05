import React from "react";
import Container from "../../components/Container/Container";
import "./Address.scss";
import MyInput from "../../components/MyInput/MyInput";
import Label from "../../components/Label/Label";
import MyButton from "../../components/MyButton/MyButton";
function Address() {
  return (
    <Container title={"Manzil"}>
      <div className="address">
        <div className="sub-title">Kontakt</div>
        <div className="address__row">
          <div className="address__section">
            <Label>Tel nomer</Label>
            <MyInput placeholder={"Tel nomer"} />
            <div className="address__view">
              <Label>Tel nomer</Label>
              <div>+998 99 999 99 99</div>
            </div>
          </div>
          <div className="address__section">
            <Label>Email</Label>
            <MyInput placeholder={"Email"} />
            <div className="address__view">
              <Label>Email</Label>
              <div>Exsample@gmail.com</div>
            </div>
          </div>
          <div className="address__section">
            <Label>Manzil</Label>
            <MyInput placeholder={"Manzil"} />
            <div className="address__view">
              <Label>Manzil</Label>
              <div>Toshkent shaxri, Yunusobot</div>
            </div>
          </div>
          <div className="address__section">
            <Label>Web sayt</Label>
            <MyInput placeholder={"Web sayt"} />
            <div className="address__view">
              <Label>Web sayt</Label>
              <div>www.Otto.uz</div>
            </div>
          </div>
        </div>

        <div className="sub-title">Ijtimoiy tarmoqlar</div>
        <div className="address__row">
          <div className="address__section">
            <Label>Telegram</Label>
            <MyInput placeholder={"Telegram"} />
            <div className="address__view">
              <Label>Telegram</Label>
              <div>+998 99 999 99 99</div>
            </div>
          </div>
          <div className="address__section">
            <Label>Instagram</Label>
            <MyInput placeholder={"Instagram"} />
            <div className="address__view">
              <Label>Instagram</Label>
              <div>Exsample@gmail.com</div>
            </div>
          </div>
          <div className="address__section">
            <Label>Facebook</Label>
            <MyInput placeholder={"Facebook"} />
            <div className="address__view">
              <Label>Facebook</Label>
              <div>Toshkent shaxri, Yunusobot</div>
            </div>
          </div>
          <div className="address__section">
            <Label>Twitter</Label>
            <MyInput placeholder={"Twitter"} />
            <div className="address__view">
              <Label>Twitter</Label>
              <div>www.Otto.uz</div>
            </div>
          </div>
        </div>

        <div className="address__btn">
          <MyButton>Qo'shish</MyButton>
        </div>
      </div>
    </Container>
  );
}

export default Address;
