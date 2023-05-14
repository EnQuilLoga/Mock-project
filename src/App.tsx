import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import ReactForm from "./components/login/ReactForm";
import ProductDetail from "./components/productDetail/ProductDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/login" element={<ReactForm />}></Route>

        <Route path="/product" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
