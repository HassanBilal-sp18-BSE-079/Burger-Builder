import React from 'react';
import classes from './BurgerControl.module.css';


const BurgerControl = (props) => {
    return ( <div className={classes.BuildControl}>

        <div className={classes.Label}>
            {props.label} : {props.count}
            </div>
        <button className={classes.Less} onClick={props.deletIngredient}  disabled={props.disabled}  >Less</button>
        <button className={classes.More} onClick={props.addIngredient} >More</button>

    </div> );
}
 
export default BurgerControl;