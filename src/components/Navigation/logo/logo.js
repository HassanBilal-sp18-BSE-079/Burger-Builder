import React from 'react';
import burgerLogo from '../../../assets/images/burgerLogo.png';
import classes from './logo.module.css';


const Logo = () => {
    return ( 
        <div className={classes.logo}> 
        <img src={burgerLogo} alt='Burger Builder' />
        <h3>My Burger</h3>
        </div>
     );
}
 
export default Logo;