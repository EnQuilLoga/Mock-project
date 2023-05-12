import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Product from "./components/product/Product";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
