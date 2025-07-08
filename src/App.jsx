import React from 'react'
import Background from './components/Background'
import Forground from './components/Forground'
import Card from './components/Card'

const App = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>

      <Background />
      <Forground />

    </div>

  )
}

export default App
