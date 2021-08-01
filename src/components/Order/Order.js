import React from 'react';
import classes from './Order.module.css';



const Order = (props) => {

   // console.log(props.ingredients);

    let ingredients = [];

    for (let key in props.ingredients){
        ingredients.push({name:key,value:props.ingredients[key]});
    }

    

    let arr = ingredients.map(
        ingredient=>{ 
         return <span key={ingredient.name + props.id} className={classes.ingredients}>{ingredient.name} ({ingredient.value})</span>  
        });





    return (
        <div className={classes.div}>
            
            <h1  className={classes.inner}>Ingredients : {arr} </h1>
            <h2 className={classes.inner}>  Price: {props.price} Rs</h2>
        </div>
      );
}
 
export default Order;