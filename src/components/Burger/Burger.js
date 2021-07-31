import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredients from './BurgerIngrediants/BurgerIngredients';



const Burger = (props) => {

    let ingredientArray = Object.keys(props.ingredients)
    .map(igkey=>{
        return [...Array(props.ingredients[igkey])].map((_,i)=>{
            return <BurgerIngredients key={igkey + i} type={igkey} />
        })
    })
    .reduce((arr,el)=>{
        return arr.concat(el);
    },[]);

    if (ingredientArray.length === 0){
        ingredientArray = <h2><strong>Pleaase start adding ingredients!</strong></h2>;
    }

    return ( 
        <div className={classes.burger}>
            <BurgerIngredients type='bread-top' />
            {ingredientArray}
            <BurgerIngredients type='bread-bottom' />
        </div>
     );
}
 
export default Burger;