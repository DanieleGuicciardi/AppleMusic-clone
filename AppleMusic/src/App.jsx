import { useState } from 'react'
import './App.css'
import "bootstrap-icons/font/bootstrap-icons.css";

import Sidebar from './components/Sidebar'
import Player from './components/PlayerBar'
import MainContent from './components/MainContent';
import AppleFooter from './components/AppleFooter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-content">
        <Player />

        {/* Contenuto principale */}
        <div className="content">
          <MainContent />

        <AppleFooter />
        </div>
      </div>
    </div>
  )
}

export default App
