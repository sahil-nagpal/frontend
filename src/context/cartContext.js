import React,{useContext,useReducer} from 'react';

const CartContext = React.createContext({});

const defaultCartState = {
		items :[],
		totalAmount :0
};
const cartReducer = (state,action) =>{

	 if(action.type === "AddItem"){
	 	console.log(state)
	 	let updatedItems;
	 	let exisitingItemIndex = state.items.findIndex((item)=> item.id === action.item.id)
	 	let exisitingItem = state.items[exisitingItemIndex]
	 	let updatedItem = ''
	 	if(exisitingItem){
	 		updatedItem = {
	 			...exisitingItem,
	 			amount:exisitingItem.amount + action.item.amount
	 		}
	 		updatedItems = [...state.items]
	 		updatedItems[exisitingItemIndex]= updatedItem
	 	}
	 	else{
	 		updatedItems = state.items.concat(action.item)
	 	}
		  
		 const updatedtotalAmount = state.totalAmount + action.item.price * action.item.amount

		 const updatedCart =  {
		 	items:updatedItems,
		 	totalAmount:updatedtotalAmount
		 };
		 return updatedCart
	 }
	 if(action.type === "removeItem"){
	 	let updatedItems;

	 	let exisitingItemIndex = state.items.findIndex((item)=> item.id === action.id)
	 	let exisitingItem = state.items[exisitingItemIndex]
	 	let updatedItem = {
	 		...exisitingItem,
	 		amount:exisitingItem.amount - 1
	 	}
	 	updatedItems = [...state.items]
	 	if(updatedItem.amount === 0){
	 		updatedItems.splice(exisitingItemIndex,1)
	 	}
	 	else{
	 		updatedItems[exisitingItemIndex]= updatedItem
	 	}
	 	const updatedtotalAmount = state.totalAmount - exisitingItem.price 
	 	const updatedCart =  {
		 	items:updatedItems,
		 	totalAmount:updatedtotalAmount
		 };
		 console.log(updatedCart,">the updatedCart")
		 return updatedCart


	 }
	 
}
function CartContextProvider (props){

	const [cartState,dispatchCart] = useReducer(cartReducer,defaultCartState)
	const addItemHandler = (item)=>{
		dispatchCart({type:"AddItem",item:item})

	};
	const removeItemHandler = (id)=>{
		console.log(">>>her  i am")
		dispatchCart({type:"removeItem",id:id})
	};

	const cartContext = {
		items :cartState.items,
		totalAmount :cartState.totalAmount,
		addItem :addItemHandler,
		removeItem :removeItemHandler
	};

	return (
	<CartContext.Provider 
	value={cartContext}>
	{props.children}
	</CartContext.Provider>
	)



}

const useCart = ()=>{
	const context = useContext(CartContext);
	
	if(context === "undefined"){
		return console.log("error boys")
	}
	return context;
}
export {CartContextProvider,useCart};
