import Footer from './components/Footer';
import Men from './components/pages/Men';
import Women from './components/pages/Women';
import Electronics from './components/pages/Electronics';
import Jewelery from './components/pages/Jewelery';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import Test from './components/pages/Test';
import { Routes, Route } from 'react-router-dom';
import {useDispatch } from 'react-redux';
import { fetchProducts } from './app/features/productSlice';
import { useEffect } from 'react';
import Cart from './components/Cart';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  },[fetchProducts]);



  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ProductsList />}></Route>
        <Route path='Men' element={<Men />}></Route>
        <Route path='Women' element={<Women />}></Route>
        <Route path='Jewelery' element={<Jewelery />}></Route>
        <Route path='Electronics' element={<Electronics/>}></Route>
        <Route path='Test' element={<Test/>}></Route>
        <Route path='Cart' element={<Cart/>}></Route>
      </Routes>
      <Footer />

    </>
  )
}

export default App
