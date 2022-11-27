import { useEffect } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import {useCart} from '../../context/cartContext.js'
import CartItem  from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import {cartActions} from '../../store'
const Cart = props =>
{	
	
	const dispatch = useDispatch();
	const {addToCart,updateQuantity,orderItems} = cartActions;
	const {items,totalBill,itemOrdered} = useSelector((state)=>state.cart)
	const addOneItem =(item)=>{
		dispatch(updateQuantity({"itemId":item._id,"type":"add"}))
	}
	const removeOneItem = (id)=>{
		dispatch(updateQuantity({"itemId":id,"type":"remove"}))
	}
	const handleOrder = ()=>{
		dispatch(orderItems({"type":"ordered"}))
		setTimeout(()=>{
			dispatch(orderItems({"type":"hide-cart"}))
		},6000)
	}
	const cartItems = items.map((item)=>{ return <CartItem key={item.id} name={item.name} summary={item.description} amount={item.quantity} price={item.price} onAdd={addOneItem.bind(null,item)} onRemove={removeOneItem.bind(null,item._id)} />})
	
	const fixedTotalAm = totalBill!= undefined ?totalBill.toFixed(2):0
	return <Modal>

		{itemOrdered && <div className={classes['message-box']}><p>Success</p><p>Thanks for ordering.</p></div>}
		{!itemOrdered && <><ul className={classes['cart-items']}>
		{cartItems}
	</ul>
		<div className = {classes.total}>
			<span>Total Amount</span>
			<span> $ {fixedTotalAm}</span>
		</div>
		<div className={classes.actions}>
			<button onClick={props.hideCart} className = {classes['button--alt']}>Close</button>
			{cartItems.length > 0 && <button onClick={handleOrder} className = {classes.button}>Order</button>}
		</div></>}
	</Modal>
}
export default  Cart;