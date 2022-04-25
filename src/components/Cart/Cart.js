import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import {useCart} from '../../context/cartContext.js'
import CartItem  from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import {cartActions} from '../../store'
const Cart = props =>
{	
	const dispatch = useDispatch();
	const {addToCart,updateQuantity} = cartActions;
	const {items,totalBill} = useSelector((state)=>state.cart)
	const addOneItem =(item)=>{
		dispatch(updateQuantity({"itemId":item._id,"type":"add"}))
	}
	const removeOneItem = (id)=>{
		dispatch(updateQuantity({"itemId":id,"type":"remove"}))
	}
	const cartItems = items.map((item)=>{ return <CartItem key={item.key} name={item.name} summary={item.description} amount={item.quantity} price={item.price} onAdd={addOneItem.bind(null,item)} onRemove={removeOneItem.bind(null,item._id)} />})
	
	const fixedTotalAm = totalBill!= undefined ?totalBill.toFixed(2):0
	return <Modal>
	<ul className={classes['cart-items']}>
		{cartItems}
	</ul>
		<div className = {classes.total}>
			<span>Total Amount</span>
			<span> $ {fixedTotalAm}</span>
		</div>
		<div className={classes.actions}>
			<button onClick={props.hideCart} className = {classes['button--alt']}>Close</button>
			<button className = {classes.button}>Order</button>
		</div>
	</Modal>
}
export default  Cart;