import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import ProductDemo from "./components/product-demo/productDemo";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      {/* <ProductDemo></ProductDemo> */}
      <Footer />
      
    </div>
  );
}

export default App;
