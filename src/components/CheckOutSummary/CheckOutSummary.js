import React from 'react';
import Burger from '../Burger/Burger';
import Button from '../CustomButton/CustomButton';
import classes from './CheckOutSummary.module.css';


const CheckOutSummary = (props) => {
    return ( <div className={classes.checkOut}>
            <Burger ingredients={props.ingredients} />
            <Button color='Danger'  clicked={props.checkoutCancel}>CANCEL</Button>
            <Button color='Success' clicked={props.checkoutContinue}>CONTINUE</Button>

    </div> );
}
 
export default CheckOutSummary;