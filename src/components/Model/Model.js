import React from 'react';
import classes from './Model.module.css';
import BlackBackground from './BlackBackground/BlackBackground';


const Model = (props) => {
    return (
    <React.Fragment>   
        <BlackBackground view={props.view} disappearbackground={props.disappearbackground}/>
        <div className={classes.Model} 
        style={{
            transform: props.view ? 'translateY(0)':'translateY(-100vh)',
            opacity:  props.view ? 1:0
        }}>
            {props.children}
        </div>
    </React.Fragment>
    
     );
}
 
export default Model;