import {Route, Routes} from "react-router-dom";
import LoginIndex from "../views/auth/login/LoginIndex.tsx";
import HomeIndex from "../views/home/HomeIndex.tsx";
import React from "react";

const RouterComponent: React.FC = () => (
  <Routes>
    <Route path="/" element={<LoginIndex/>}/>
    <Route path="/home" element={<HomeIndex/>}/>
  </Routes>
)

export default RouterComponent