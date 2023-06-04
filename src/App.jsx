import "./scss/index.scss";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";


function App() {
  return (
    <div className="App">
      <div className="row">
        <NavBar />
        <main className="main">
          <Routes>
            <Route path={"/"} element={<Products />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
