import React from 'react';
import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
    return (  
        <div className={classes.div}>
        <div className={classes.Spinner}></div>
        </div>
    );
}
 
export default LoadingSpinner;