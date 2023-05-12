import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import ReactForm from "./components/login/ReactForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <ReactForm/>
    </div>
    
  );
}

export default App;
