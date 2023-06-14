import React, { useState, useEffect } from 'react';
import './App.css'
import WelcomePage from './components/WelcomePage/WelcomePage'
import Navigation from './components/Navigation';

function App() {
  const [moved, setMoved] = useState(false);
  document.addEventListener("scroll", () => document.documentElement.scrollTop > 50 ? setMoved(true) : setMoved(false))
  return (
    <>
    <Navigation moved={moved} />
      <WelcomePage />
    </>
  )
}

export default App
