import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './views/Home/Home.js';
import Product from './views/Product/Product.js';
import Products from './views/Products/Products.js';
import Category from './views/Category/Category.js';

function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}  />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/product/:id" element={<Product />} />
            <Route exact path="/category/:category" element={<Category />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
