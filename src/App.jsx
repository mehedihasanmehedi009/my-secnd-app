import { Suspense, useState } from 'react' 
import './App.css'
import Contries from './Contries'

function App() {
  const [count, setCount] = useState(0)
      const contry = fetch("https://openapi.programming-hero.com/api/all")
    .then(res=>res.json())
  return (
    <>
      <h1> This is project </h1>

       <Suspense fallback={<h1> loding ......</h1>}>
         <Contries contry={contry}></Contries>
       </Suspense>
    </>
  )
}

export default App
