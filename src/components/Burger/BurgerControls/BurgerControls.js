import React from 'react';
import classes from './BurgerControls.module.css';
import BurgerControl from './BurgerControl/BurgerControl';




const BurgerControls = (props) => {

    const controls = [
        {label:'Salad',type:'salad'},
        {label:'Meat',type:'meat'},
        {label:'Cheese',type:'cheese'},
        {label:'Bacon',type:'bacon'},
    ];


    return ( <div className={classes.BuildControls}>
        <h2>Total Price: {props.price} Rs</h2>
            {controls.map(ctrl=>{
                return <BurgerControl 
                key={ctrl.type}
                label={ctrl.label}
                addIngredient={()=> props.addIngredient(ctrl.type)}
                deletIngredient={()=> props.deletIngredient(ctrl.type)} 
                disabled={props.disabled[ctrl.type]}
                count={props.ingredients[ctrl.type]} />
            })}

            <button className={classes.OrderButton}
             disabled={!props.purchaseable}
             onClick={props.purchasing}>ORDER NOW</button>
        </div> 
    );
}
 
export default BurgerControls;