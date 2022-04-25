import React,{useRef} from 'react';
import Input from '../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = props =>{
	const amountRef = useRef();

	const submitHandler = event =>{
		const amount = parseInt(amountRef.current.value)
		event.preventDefault()
		props.handleAdd(amount)
		
	}
	return <form  onSubmit={submitHandler} className={classes.form}>
		<Input ref={amountRef} label="Amount" input={{id:`am1_${props.id} `,type:'number',min:'1',max:'5',step:'1',defaultValue:'1'}} />
		<button >+  Add cart</button>
	</form>
}
export default MealItemForm;