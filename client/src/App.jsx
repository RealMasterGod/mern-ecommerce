import Navbar from "./components/navbar"
import Product from "./pages/product"
import Home from "./pages/home"
import ProductList from "./pages/productList"
import Register from "./pages/register"
import Login from "./pages/login"
import Cart from "./pages/cart"
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Success from "./pages/success"
import { useSelector } from "react-redux"

function App() {
  const user = useSelector(store => store?.user?.currentUser)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/login" element={user ? <Navigate to="/" />: <Login /> } />
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
