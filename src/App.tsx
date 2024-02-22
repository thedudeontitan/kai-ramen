import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#F3EDE1] font-hiro-misake min-h-screen w-screen text-[#333F72]'>
      <Navbar/>
      
    </div>
  )
}

export default App
