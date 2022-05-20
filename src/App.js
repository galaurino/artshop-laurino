import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/home/Home.js';
import NavBar from './components/navBar/NavBar.js';
import ItemListContainer from './components/itemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.js';

function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}  />
            <Route exact path="/products" element={<ItemListContainer />} />
            <Route exact path="/item/:productId" element={<ItemDetailContainer />} />
            <Route exact path="/category/:category" element={<ItemListContainer  />}  />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
