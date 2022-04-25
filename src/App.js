import {React,useState,useEffect} from 'react';

import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import {CartContextProvider} from './context/cartContext';
import {MealProvider} from './context/mealContext';
import Login from './pages/auth/Login';
import { fetchMeals } from './store/slices/mealSlice';
import { useSelector } from 'react-redux';
import MainPage from './pages/mainPage';
import {
  BrowserRouter as Router,
  Routes,
  Navigate ,
  Route,
} from "react-router-dom";
function App() {
  document.title = "Food Order App"

  
  const {items,totalBill} = useSelector((state)=>state.cart)

  useEffect(()=>{
    console.log("items ::::",items)
  },[items])

  const showCart = ()=>{
    setisCartShown(true)
  }
  const hideCart = ()=>{
    setisCartShown(false)
  }

  return (
    <>
       <Router>
         <Routes>
         <Route path='*' element={<Login/>} />
          <Route path="/" element={<Login />} />
          <Route path="/mainPage" element={ window.localStorage.getItem("access_token")?<MainPage />:<Navigate  to ='/'/> } />
         </Routes>
       </Router>
       {/* <Cart hideCart={hideCart}></Cart> */}
      {/* {isCartShown && <Cart hideCart={hideCart}/>}
      
      <main>
      <Meals/>
      </main> */}
    </>

  );
}

export default App;
