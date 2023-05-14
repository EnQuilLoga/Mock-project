import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import ReactForm from "./components/login/ReactForm";
import Product from "./components/product/product";
import LoginForm from "./components/login/LoginForm";
import RegisterForm from "./components/login/RegisterForm";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/login" element={<LoginForm />}></Route>

        <Route path="/register" element={<RegisterForm />}></Route>

        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
