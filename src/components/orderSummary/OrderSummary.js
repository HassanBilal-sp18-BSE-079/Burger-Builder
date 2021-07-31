import React from 'react';
import Button from '../CustomButton/CustomButton';


const OrderSummary = (props) => {

    let summary = Object.keys(props.ingredients).map(igkey=>{
        return(<li key={igkey}><span style={{textTransform:'capitalize'}}>{igkey}</span> : {props.ingredients[igkey]}</li>)
    });


    return ( 
        <div style={{fontSize:20}}>
            <h1>A Delicious Burger</h1>
            <h3>Total Ingredients:</h3>
            <ul>
                {summary}
            </ul>
            <h3>Total Price: {props.price} Rs</h3>
            <h3>Continue to checkout?</h3>
            <Button color="Danger" clicked={props.cancelPurchase}>CANCEL</Button>
            <Button color="Success" clicked={props.continuePurchase}>CONTINUE</Button>
        </div>

     );
}
 
export default OrderSummary;