import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import Linechart from './components/Linechart/Linechart'
// import DaisyUI from './components/DaisyUI/DaisyUI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyUI></DaisyUI> */}
      <h1 className='text-5xl bg-red-400'>Hello this is from App jsx</h1>
      <PriceOptions></PriceOptions>
      <Linechart></Linechart>
    </>
  )
}

export default App
