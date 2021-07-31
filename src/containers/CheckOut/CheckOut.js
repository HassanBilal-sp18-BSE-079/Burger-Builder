import React, { useEffect, useState } from 'react';
import CheckOutSummary from '../../components/CheckOutSummary/CheckOutSummary';
import Spinner from '../../components/LoadingSpinner/LoadingSpinner';




const CheckOut = (props) => {

    let [ingredients,setIngredients]=useState(null);

    console.log(props);

    useEffect(()=>{
        let params  = new URLSearchParams(props.location.search);
        let ingredients = {};

        for (let [key,value] of params){
            ingredients[key] = +value;
        }
        setIngredients(ingredients);
    },[props.location.search]);

   


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


    console.log(ingredients);


    return (  
        <div>
            {checkoutSummary}
        </div>
    );
}
 
export default CheckOut;