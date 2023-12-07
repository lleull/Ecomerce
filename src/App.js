import React from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Main from './Component/Main/Main'
import Portal from './Component/Main/Portal/Portal'
import { useState } from 'react'
const App = () => {
  const [first, setfirst] = useState(false)

  
  return (
    <div className='app'>
<div className='mainapp'>
  <Navbar/>
<Main  portal={first} open={() => setfirst(!first)}/>
</div>
{first ? <Portal portal={first} open={() => setfirst(!first)} />:''}
    </div>

  )
}

export default App