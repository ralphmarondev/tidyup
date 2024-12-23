import {Route, Routes, useLocation} from 'react-router-dom'
import LoginIndex from '../views/auth/login/LoginIndex.tsx'
import HomeIndex from '../views/home/HomeIndex.tsx'
import React, {useEffect} from 'react'
import RegisterIndex from '../views/auth/register/RegisterIndex.tsx'

const RouterComponent: React.FC = () => {
  const location = useLocation()

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'Login'
        break
      case '/register':
        document.title = 'Register'
        break
      case '/home':
        document.title = 'Home'
        break
      default:
        document.title = 'TidyUp'
        break
    }
  })

  return (
    <Routes>
      <Route path="/" element={<LoginIndex/>}/>
      <Route path="/register" element={<RegisterIndex/>}/>
      <Route path="/home" element={<HomeIndex/>}/>
    </Routes>
  )
}

export default RouterComponent