import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import LoginForm from "./components/login/LoginForm";
import RegisterForm from "./components/login/RegisterForm";
import ProductDetail from "./components/productDetail/ProductDetail";
import ContactUs from "./components/contact/ContactUs";
import AboutUs from "./components/contact/AboutUs";
import LatestBlogs from "./components/Latest/LatestBlogs";
import DetailFifth from "./components/Latest/DetailFifth";
import DetailFourth from "./components/Latest/DetailFourth";
import DetailSecond from "./components/Latest/DetailSecond";
import DetailThird from "./components/Latest/DetailThird";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/login" element={<LoginForm />}></Route>

        <Route path="/register" element={<RegisterForm />}></Route>

        <Route path="/product" element={<ProductDetail />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/Detail-fifth" element={<DetailFifth />} />
        <Route path="/Detail-fourth" element={<DetailFourth />} />
        <Route path="/Detail-second" element={<DetailSecond />} />
        <Route path="/Detail-third" element={<DetailThird/>} />


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
