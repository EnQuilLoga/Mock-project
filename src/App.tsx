import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import LoginForm from "./components/login/LoginForm";
import RegisterForm from "./components/login/RegisterForm";
import ProductDetail from "./components/productDetail/ProductDetail";
import ContactUs from "./components/contact/ContactUs";
import AboutUs from "./components/contact/AboutUs";
import Userinfo from "./components/user-Information/Userinfo";
import ProductList from "./components/productDetail/ProductList";
import Cookies from "js-cookie";
import { IUserProfile } from "./types/userProfile";

function App() {
  const [refresh, setRefresh] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<IUserProfile>();

  console.log("userProfile: ", userProfile);

  // useEffect(() => (

  // ), [refresh])

  return (
    <div className="App">
      <Header refresh={refresh} setRefresh={setRefresh} userProfile={userProfile} />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route
          path="/login"
          element={
            <LoginForm refresh={refresh} setRefresh={setRefresh} setUserProfile={setUserProfile} />
          }
        ></Route>

        <Route path="/user-info" element={<Userinfo />}></Route>

        <Route path="/register" element={<RegisterForm />}></Route>

        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />

        <Route path="/user-info" element={<Userinfo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
