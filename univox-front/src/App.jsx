import { useState } from 'react'
import Main from './main-page/Main'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main/>
    </>
  )
}

export default App
