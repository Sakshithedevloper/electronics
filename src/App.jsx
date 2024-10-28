import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewHeader from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import { Table } from './Components/Table'
import Price from './Components/Price'
import Dealers from './Components/Dealers'
import Register from './Components/Register'

const App = () => {
  return (
    <>
      <div>
        <NewHeader />
        <Home />
        <Table />
        {/* <Price /> */}
        <Dealers/>
        <Register/>
        <Routes>


          {/* <Route path = '/' element = {<Home/>}/> */}

        </Routes>
      </div>
    </>
  )
}

export default App;