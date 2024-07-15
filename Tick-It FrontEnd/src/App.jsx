import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Main from './components/Main'
import {Route, Routes} from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <Header/>
      <Main />

    </div>
  )
}

export default App
