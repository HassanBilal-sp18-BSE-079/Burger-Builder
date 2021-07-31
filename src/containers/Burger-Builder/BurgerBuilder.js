import React,{Fragment, useEffect, useState} from 'react';
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import Model from '../../components/Model/Model';
import OrderSummary from '../../components/orderSummary/OrderSummary';
import Spinner from '../../components/LoadingSpinner/LoadingSpinner';
import axios from '../../axiosInstance';
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';




const INGREDIENT_PRICE ={
    salad:50,
    bacon:50,
    meat:100,
    cheese:50,
}


const BurgerBuilder = (props) => {
    
    let [ingredients,setIngredients] = useState(null);
    let [totalPrice, setTotalPrice] = useState(50);
    let [purchaseable, setPurchaseable] = useState(false);
    let [purchasing , setPurchasing] = useState(false);
    let [LoadingSpinner,setLoadingSpinner]= useState(false);
    let [error,setError]= useState(false);



//fetching ingredients from firebase
    useEffect(()=>{
        axios.get('https://burger-builder-5edb1-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json')
        .then(res=>{
            setIngredients(res.data);
        }).catch(err=>{
            console.log(err);
            setError(true);

        });

    },[]);






    let updatePurchaseable = (ingredients)=>{
        let ingredientsCopy = {
            ...ingredients
        };

        let sum = 0;

        for (let key in ingredientsCopy){
            sum = ingredientsCopy[key] + sum;
        }

        setPurchaseable(sum > 0); 

    }

    let addIngredientHandler = (type) =>{
        
        let oldCount = ingredients[type];
        let newCount = ++oldCount;
        let newIngredient = {
            ...ingredients
        };

        newIngredient[type] = newCount;
        setIngredients(newIngredient);

        let oldPrice = totalPrice;
        let newPrice = oldPrice + INGREDIENT_PRICE[type];
        setTotalPrice(newPrice);

        updatePurchaseable(newIngredient);

    }


    let deletIngredientHandler = (type)=>{
        if (ingredients[type] > 0){
        let oldCount = ingredients[type];
        let newCount = --oldCount;
        let newIngredient = {
            ...ingredients
        };

        newIngredient[type]= newCount;
        setIngredients(newIngredient);
        
        let oldPrice = totalPrice;
        let newPrice = oldPrice - INGREDIENT_PRICE[type];
        setTotalPrice(newPrice);

        updatePurchaseable(newIngredient);

    }

    }

    let purchasinghandler = ()=>{
        setPurchasing(!purchasing);
    }

    let continuePurchaseHandler = ()=>{

        let queryString = new URLSearchParams(ingredients);

        //console.log(queryString.toString());

        props.history.push({
            pathname:'/checkout',
            search:'?' + queryString.toString(),
        });

       /* setLoadingSpinner(true);
        const order = {
            ingredients : ingredients,
            price : totalPrice,
            customer: {
                name: 'Hassan',
                address:{
                    street:'Raza Garden ',
                    zipCode:'4000'
                },
                email:'hassan@gmail.com'
            },
            deliveryMethod:'Fastest'
        };
// sending data to firebase
        axios.post('/orders.json',order).then(res=>{
            setLoadingSpinner(false);
            setPurchasing(!purchasing);
        }).catch(error=>{
            console.log(error);
            setLoadingSpinner(false);
            setPurchasing(!purchasing);
        }); */
        
    }





    // applying ingredient button disable condition 
    let disabledInfo = {
        ...ingredients
    };

    for (let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] <= 0;
    }




    let burger = <Spinner/>;

    let  orderSummary = null;


    if(ingredients){
        burger=  <React.Fragment>
                    <Burger ingredients={ingredients}/>
                    <BurgerControls ingredients={ingredients} 
                    addIngredient={addIngredientHandler} 
                    deletIngredient={deletIngredientHandler} 
                    disabled={disabledInfo}  
                    price={totalPrice} 
                    purchaseable={purchaseable} 
                    purchasing={purchasinghandler}/>
                    </React.Fragment>;
        
        orderSummary = <OrderSummary price={totalPrice}
                        cancelPurchase={purchasinghandler} 
                        continuePurchase={continuePurchaseHandler} 
                        ingredients={ingredients} />;
                        
    }

    //applying conditing to show spinner while http POST req is sent
   
     if(LoadingSpinner){
         orderSummary= <Spinner/>;
     }









    return ( 
        <Fragment>
            <Model view={purchasing} disappearbackground={purchasinghandler}>
                {orderSummary}
            </Model> 
        
           {//condition if an error occures wile fetching ingredients 
           error ? <h1>Ingredients Can't be loaded</h1>:burger}
        </Fragment>

     );
}
 //higher order component used to handel http errors globally
export default withErrorHandler( BurgerBuilder,axios);