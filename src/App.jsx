import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const BASE_URL = import.meta.env.BASE_URL;
  
  
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[pvw]'>
      <ToastContainer/>
     <Navbar/>
     <SearchBar/>
      <Routes>
        <Route path={BASE_URL} element={<Home/>}/>
        <Route path={BASE_URL+'collection'} element={<Collection/>}/>
        <Route path={BASE_URL+'about'} element={<About/>}/>
        <Route path={BASE_URL+'contact'} element={<Contact/>}/>
        <Route path={BASE_URL+'product/:productId'} element={<Product/>}/>
        <Route path={BASE_URL+'cart'} element={<Cart/>}/>
        <Route path={BASE_URL+'login'} element={<Login/>}/>
        <Route path={BASE_URL+'place-order'} element={<PlaceOder/>}/>
        <Route path={BASE_URL+'orders'} element={<Orders/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App