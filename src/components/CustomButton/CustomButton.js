import React from 'react';
import classes from './CustomButton.module.css';



const CustomButton = (props) => {
    return (
        <button onClick={props.clicked} className={[classes.Button, classes[props.color]].join(' ')}>{props.children}</button>
    );
}

export default CustomButton;