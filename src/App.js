import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from './Component/products';
import Product from './Component/product';

function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path='/' caseSensitive={false} element={<Home />} />
        <Route path='/products' caseSensitive={false} element={<Products />} />
        <Route path='/products/:id' caseSensitive={false} element={<Product />} />
        </Routes>
    </div>
  );
}

export default App;
