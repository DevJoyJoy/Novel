import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainMenu } from './pages/MainMenu'
import { FirstTake } from './pages/FirstTake'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainMenu/>}></Route>
          <Route path='/FirstTake' element={<FirstTake/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
