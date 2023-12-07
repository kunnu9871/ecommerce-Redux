import Footer from './components/Footer';
import Men from './pages/Men'
import Women from './pages/Women';
import Electronics from './pages/Electronics';
import Jewelery from './pages/Jewelery';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';
import Test from './pages/Test';
import SignUp from './pages/signUp/SignUp'
import Login from './pages/login/Login'

import { Routes, Route } from 'react-router-dom';
import {useDispatch } from 'react-redux';
import { fetchProducts } from './app/features/productSlice';
import { useEffect } from 'react';

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
        <Route path='SignUp' element={<SignUp/>}></Route>
        <Route path='Login' element={<Login/>}></Route>
      </Routes>
      <Footer />

    </>
  )
}

export default App
