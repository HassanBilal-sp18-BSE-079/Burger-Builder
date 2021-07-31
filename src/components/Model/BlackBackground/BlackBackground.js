import React from 'react';
import classes from './BlackBackground.module.css';




const BlackBackground = (props) => {
    return ( 
        props.view ? <div className={classes.backdrop} onClick={props.disappearbackground}></div> : null
     );
}
 
export default BlackBackground;