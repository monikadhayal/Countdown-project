 
import { useState } from 'react'
// import CounterTimer from './component/countertimer/CounterTimer'
import CounterTimer from './component/countertimer/CounterTimer';

function App() {
  const [count,setCount]  = useState();
  return (
    <>
     <CounterTimer/>
    </>
  )
}

export default App
