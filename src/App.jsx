import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidbar/Sidebar'
import Dashboard from './Pages/private/Dashboard'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
      
      <Header/>
      <Outlet />
      

    </>
  )
}

export default App
