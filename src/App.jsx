import "./scss/index.scss";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";
import AddProducts from "./pages/AddProducts/AddProducts";
import Banners from "./pages/Banners/Banners";
import Addition from "./pages/Addition/Addition";
import Categories from "./pages/Categories/Categories";
import Partner from "./pages/Partner/Partner";
import Address from "./pages/Address/Address";
import Orders from "./pages/Orders/Orders";

function App() {
  return (
    <div className="App">
      <div className="row">
        <NavBar />
        <main className="main">
          <Routes>
            <Route path={"/"} element={<Products />} />
            <Route path="/add-product" element={<AddProducts />} />
            <Route path="/banners" element={<Banners />} />
            <Route path="/addition" element={<Addition/>} />
            <Route path="/categories" element={<Categories/>} />
            <Route path="/partner" element={<Partner/>} />
            <Route path="/address" element={<Address/>} />
            <Route path="/orders" element={<Orders/>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
