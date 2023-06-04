import React from "react";
import "./NavBar.scss";
import logo from "./../../images/logo.png";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="nav-bar">
      <div className="logo">
        <img src={logo} alt="logo" width={54} />
        <hr />
      </div>
      <nav className="nav">
        <div className="link">
          <Link to="/">Tavar qoshish</Link>
        </div>
        <div className="link active">
          <Link to="/bannerlar">Bannerlar</Link>
        </div>
        <div className="link">
          <Link to="/koshimchalar">Koshimchalar</Link>
        </div>
        <div className="link">
          <Link to="/kategoriya">Kategoriya</Link>
        </div>
      </nav>

      <div className="logout">
        <a href="#">Chiqish</a>
      </div>
    </div>
  );
}

export default NavBar;
