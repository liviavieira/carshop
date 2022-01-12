import React, { useState } from 'react'
import './App.css'

import Cursor from './components/Cursor'
import Menu from './components/Menu'
import Header from './components/Header'
import Intro from './components/Intro'
import Carousel from './components/Carousel'
import Shop from './components/Shop'

export default function App() {
  const [open , setOpen] = useState(false)

  const handleMenu = () => {
    setOpen(!open)
  }

  const [size , setSize] = useState(false)
  
  const handleIncrease = () => {
    setSize(true)
  }
  const handleDecrease = () => {
    setSize(false)
  }

  return (
    <>
      {window.innerWidth > 1024 &&
        <Cursor 
          open={open} 
          size={size}
        />
      }
      <Menu 
        handleMenu={handleMenu} 
        handleIncrease={handleIncrease} 
        handleDecrease={handleDecrease} 
        open={open}
      />
      
      <div className="horizontal-container">
        <div className="sticky-wrapper">
          <div className="section-wrapper">
              <Header 
                handleIncrease={handleIncrease} 
                handleDecrease={handleDecrease}
              />
              <Intro 
                handleIncrease={handleIncrease} 
                handleDecrease={handleDecrease}
              />
              <Carousel 
                handleIncrease={handleIncrease} 
                handleDecrease={handleDecrease}
              />
          </div>
        </div>
      </div>
      <Shop/>
    </>
  );
}