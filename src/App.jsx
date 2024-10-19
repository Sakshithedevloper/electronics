import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewHeader from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import { Table } from './Components/Table'
import Price from './Components/Price'

const App = () => {
  return (
    <>
      <div>
        <NewHeader />
        <Home />
        <Table />
        <Price />
        <Routes>


          {/* <Route path = '/' element = {<Home/>}/> */}

        </Routes>
      </div>
    </>
  )
}

export default App;