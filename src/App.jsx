import { Route, Routes } from "react-router-dom"
import Navbarr from "./components/navbar/Navbarr"
import Home from "./components/home/Home"
import Cart from "./components/home/Cart"
import Ditilse from "./components/dtilse/Ditilse"



function App() {

  return (
    <>
    <Navbarr/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path='/product/:productId' element={<Ditilse/>}>product</Route>
</Routes>


  
    </>
  )
}

export default App
