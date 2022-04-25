import React ,{useEffect,useState} from "react";
import Cart from "../../components/Cart/Cart";
import Meals from "../../components/Meals/Meals";
import Header from "../../components/Layout/Header";
const MainPage = ()=>{
    const [isCartShown,setisCartShown] = useState(true);
    const showCart = ()=>{
        setisCartShown(true)
      }
    const hideCart = ()=>{
        setisCartShown(false)
      }
    return (
        <>
            <Header  setShowCart={showCart}/>
            {isCartShown && <Cart hideCart={hideCart}></Cart>}
            <Meals/>
        </>
    )
}

export default MainPage;