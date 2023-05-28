import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import { LoginForm } from "./components/login/LoginForm";
import ReactForm from "./components/login/ReactForm";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/react" element={<ReactForm />}></Route>
      </Routes>
      {/* <ProductDemo></ProductDemo> */}
      <Footer />
      
    </div>
  );
}

export default App;
