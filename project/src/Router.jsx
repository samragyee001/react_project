import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} > 
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
