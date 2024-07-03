
import Navbar from './components/Navbar/Navbar'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoggingSignup from './Pages/LoggingSignup'


function App() {
  
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory category ="mens"/>}/>
          <Route path='/womens' element={<ShopCategory category ="women"/>}/>
          <Route path='/kids' element={<ShopCategory category ="kid"/>}/>
          <Route path='/product' element={<Product/>}>
          <Route path=':Product' element={<Product/>}/>
          </Route>
          <Route path='/cart' element ={<Cart/>}/>
          <Route path='/login' element = {<LoggingSignup/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App
