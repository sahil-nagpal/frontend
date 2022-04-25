import React,{useEffect,useReducer,useContext} from 'react';
const MealContext = React.createContext({})
const initialMealData = [

	{
	key:"m1",
	id:"1",
	name:"Burger",
	description:"A noodle Burger",
	price:12.88
	},
	{
		key:"m2",
		id:"2",

	name:"Champ",
	description:"Soya and butter champ",
	price:16.88
	}
	,
	{
		key:"m3",
		id:"3",

	name:"Pizza",
	description:"Mix Pizza",
	price:17.38
	}

]
const mealReducer = (state,action)=>{
	if(action.type == "changeMeals"){
		const updatedMeals = action.meals
		return updatedMeals;
	}
}

const MealProvider = (props)=>{


    const [meals,mealDispatcher] = useReducer(mealReducer,initialMealData)
    const fetchMeals = (filter="Indian")=>{
            const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${filter}`
            fetch(url).then(response => response.json())
            .then((json )=> {
                let mealArr = []
                let price = 13.98
                for(let items in json.meals){
                    let temp = {}
                    price = price +2.89
                    temp['key'] = "m"+items
                    temp['id'] = items
                    temp['name'] = json.meals[items]['strMeal']
                    temp['description'] =  `${filter} ` +temp['name'] 
                    temp['price'] = price
                    mealArr.push(temp)
                }
                mealDispatcher({"type":"changeMeals","meals":mealArr})
            });
    }

    const mealContext = {
        meals:meals,
        fetchMeals:fetchMeals
    }
    return <MealContext.Provider
        value ={mealContext}>
            {props.children}
        </MealContext.Provider>
}

const useMeals = ()=>{
	const context = useContext(MealContext);
	
	if(context === "undefined"){
		return console.log("error boys")
	}
	return context;
}
export {MealProvider,useMeals};