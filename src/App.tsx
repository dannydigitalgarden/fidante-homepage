import { useState } from 'react'
import logo from './logo.svg'
import './App.scss'
import Homepage from 'views/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Homepage />
    </div>
  )
}

export default App
