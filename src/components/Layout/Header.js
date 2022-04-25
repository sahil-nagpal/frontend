import {React,Fragment} from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './Headercart'
const Header = props =>{
	return (
	<Fragment>
		<header className={classes.header} >
			<h1>Order Meals</h1>
			<HeaderCartButton onClick={props.setShowCart} />
		</header>
		<div className = {classes['main-image']}>
			<img src={mealsImage} alt="Food table"/>
		</div>
	</Fragment>
	)
}

export default Header;