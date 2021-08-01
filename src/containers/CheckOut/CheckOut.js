import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import CheckOutSummary from '../../components/CheckOutSummary/CheckOutSummary';
import Spinner from '../../components/LoadingSpinner/LoadingSpinner';
import ContactForm from './ContactForm/ContactForm';




const CheckOut = (props) => {

    let [ingredients,setIngredients]=useState(null);
    let [price,setPrice]=useState(null);

    useEffect(()=>{
        let params  = new URLSearchParams(props.location.search);
        let ingredients = {};

        for (let [key,value] of params){
            if(key === 'price'){
                setPrice(+value);
            }
            else{
                ingredients[key] = +value;
            }
            
        }
        setIngredients(ingredients);
    },[]);

   


    const checkOutCancelHandler =()=>{
           props.history.goBack();
    }

    const checkOutContinueHandler =()=>{
        props.history.replace('/checkout/form');

    }


    let checkoutSummary = <Spinner />;

    if (ingredients){
        checkoutSummary= <CheckOutSummary 
                            checkoutCancel={checkOutCancelHandler} 
                            checkoutContinue={checkOutContinueHandler} 
                            ingredients={ingredients} />
    }


    return (  
        <div>
            {checkoutSummary}
            <Route path='/checkout/form' render={()=>{
                return(
                    <ContactForm ingredients={ingredients} price={price} {...props} />
                )
            }} />
        </div>
    );
}
 
export default CheckOut;