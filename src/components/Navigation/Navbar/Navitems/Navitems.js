import React from 'react';
import classes from './Navitems.module.css';
import Navitem from './Navitem/Navitem';



const Navitems = (props) => {
    return ( 
        <ul className={classes.navitems}>
            <Navitem link='/' exact >Burger Builder</Navitem>
            <Navitem link='/orders'>My Orders</Navitem>
        </ul>
     );
}
 
export default Navitems;