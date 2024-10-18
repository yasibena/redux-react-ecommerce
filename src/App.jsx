import { useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from './pages/Shop';
import SingleProduct from './components/SingleProduct';
import LoginForm from './pages/LoginForm';
import Register from './pages/Register';
import Card from './pages/Card';
import { useSelector } from 'react-redux';
import CallWithUs from './pages/CallWithUs';
import Dashboard from './pages/Dashboard';
import { getProductsStatus, fetchProducts } from './Redux/feature/ProductSlice'
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch()
  const productsStatus = useSelector(getProductsStatus)

  useEffect(() => {
    if (productsStatus == 'idle') {
      dispatch(fetchProducts())
    }
  }, [])

  return (
    <main className=''>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path="/shop/:id" element={<SingleProduct />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<Register />} />
          <Route path='/card' element={<Card />} />
          <Route path='/contactus' element={<CallWithUs />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>

    </main>
  )
}

export default App
