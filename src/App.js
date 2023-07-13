import './App.css';
import Header from './components/Header';
import LeftNav from './components/LeftNav';
import DataSection from './components/DataSection';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import ProductEdit from './Pages/ProductEdit';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/edit' element={<ProductEdit />} />
      </Routes>
    </Router>
  )
}

export default App;
