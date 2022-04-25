import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import {useCart} from '../../context/cartContext';
import { useSelector, useDispatch } from 'react-redux';
import {cartActions} from '../../store'
const MealItem = (props) => {
	const {addItem} = useCart();
	const dispatch = useDispatch()
	const {addToCart} = cartActions
	const addToCartHandler = (amount)=>{
		let item = {
			id:props._id,
			_id:props.id,
			name:props.name,
			price:props.price,
			quantity :amount,
		}
		dispatch(addToCart({"item":item}))
	}
	const price = `$${props.price.toFixed(2)}`;
	return (
	<li className = {classes.meal}>
		<div>
			<h3>{props.name}</h3>
			<div className={classes.description}>{props.description}</div>
			<div className={classes.price}>{price}</div>	
		</div>	
		<div><MealItemForm handleAdd={addToCartHandler} /></div>

	</li>);
}
export default MealItem;