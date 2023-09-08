import Home from "./pages/Home"
// import ProductList from "./pages/ProductList"
// import SingleProduct from "./pages/SingleProduct"
// import Register from "./pages/Register"
// import Login from "./pages/Login"
// import Navbar from "./components/Navbar";
import Cart from "./pages/Cart"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {


  return (
    <>

    {/* <ProductList/> */}
    {/* <SingleProduct/> */}
    {/* <Register/> */}
    {/* <Login/> */}
        {/* <Cart/> */}

    <Router>
  
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/cart" element={<Cart/>} />
      </Routes>
    </Router>

    </>
  )
}

export default App
