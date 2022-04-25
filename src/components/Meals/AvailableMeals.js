import {useEffect,useReducer} from 'react';
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem';
import {useMeals} from '../../context/mealContext'
import { useSelector ,useDispatch} from 'react-redux';
import { fetchMeals } from '../../store/slices/mealSlice';

// const meals = []


const AvailableMeals = () =>{
	const {meals} = useSelector((state)=>state.meal)
	const dispatch = useDispatch()
	useEffect(()=>{
		console.log(">>>>>>MainPage")
		dispatch(fetchMeals())
		
	},[])

	const mealList = meals.map( (meal)=>
		<MealItem
		key={meal.key} 
		id={meal.id}
		name={meal.name} 
		description={meal.description} 
		price={meal.price} />)

	return (
		<section className = {classes.meals}>
		<Card>
			<ul>{mealList}</ul>
		</Card>
		</section>
		)
}

export default AvailableMeals;