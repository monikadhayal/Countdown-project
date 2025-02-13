import { useState } from 'react'
import CounterTimer from './component/countertimer/CounterTimer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CounterTimer/>
    </>
  )
}

export default App
