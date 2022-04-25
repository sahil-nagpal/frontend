import {React,Fragment,useEffect,useState} from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { cartActions } from '../../store';
const HeaderCartButton = props => {
	const {items} = useSelector((state)=>state.cart)
	const [btnHighLighted ,setbtnHighLighted] = useState(false)
	const numberOfCartItems = items.reduce((curNumber,item)=>{return (curNumber + item.quantity) },0)
	const btnClass = `${classes.button} ${ btnHighLighted ? classes.bump :""}`
	useEffect(()=>{
		setbtnHighLighted(true)
		setTimeout(()=>{setbtnHighLighted(false)},900)
	},[items])
	return (
		<Fragment>
		<button onClick ={props.onClick} className = {btnClass}>
			<span className = {classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>
				{numberOfCartItems}
			</span>

		</button>
		</Fragment>
			)

};

export default  HeaderCartButton;