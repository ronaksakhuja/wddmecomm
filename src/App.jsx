import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Products from "./pages/Products";
import {CartProvider} from "./CartContext";
import { useContext } from "react";
import Checkout from "./pages/Checkout";
import './css/style.css'
function App(){
  return (
    <>
      <Router>
        <CartProvider>
        <Nav />

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>
        </CartProvider>
      </Router>
    </>
  )
}

export default App;