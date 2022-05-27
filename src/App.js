import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './views/Home/Home.js';
import Cart from './views/Cart/Cart.js';
import Product from './views/Product/Product.js';
import Products from './views/Products/Products.js';
import Category from './views/Category/Category.js';
import CustomProvider from './components/customProvider/CustomProvider.js'

function App() {
  return (
        <BrowserRouter>
          <CustomProvider>
            <Routes>
              <Route exact path="/" element={<Home />}  />
              <Route exact path="/products" element={<Products />} />
              <Route exact path="/product/:id" element={<Product />} />
              <Route exact path="/category/:category" element={<Category />} />
              <Route exact path="/cart" element={<Cart />} />
            </Routes>
          </CustomProvider>
        </BrowserRouter>
  );
}

export default App;
