import {Route, Routes} from "react-router-dom";
import LoginIndex from "../views/auth/login/LoginIndex.tsx";
import HomeIndex from "../views/home/HomeIndex.tsx";
import React from "react";
import RegisterIndex from "../views/auth/register/RegisterIndex.tsx";

const RouterComponent: React.FC = () => (
  <Routes>
    <Route path="/" element={<LoginIndex/>}/>
    <Route path="/register" element={<RegisterIndex/>}/>
    <Route path="/home" element={<HomeIndex/>}/>
  </Routes>
)

export default RouterComponent