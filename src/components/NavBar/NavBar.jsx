import React from "react";
import "./NavBar.scss";
import logo from "./../../images/logo.png";
import { Link, useLocation } from "react-router-dom";
import NavLink from "../NavLink/NavLink";
function NavBar() {
  return (
    <div className="nav-bar">
      <div className="logo">
        <img src={logo} alt="logo" width={54} />
        <hr />
      </div>
      <nav className="nav">
        <NavLink path={"/add-product"} text={"Tavar qoshish"} />
        <NavLink path={"/banners"} text={"Bannerlar"} />
        <NavLink path={"/addition"} text={"Koshimchalar"} />
        <NavLink path={"/categories"} text={"Kategoriya"} />
        <NavLink path={"/partner"} text={"Hamkor brendlar"} />
        <NavLink path={"/address"} text={"Manzil"} />
        <NavLink path={"/orders"} text={"Buyurtmalar"} />
      </nav>

      <div className="logout">
        <a href="#">Chiqish</a>
      </div>
    </div>
  );
}

export default NavBar;
