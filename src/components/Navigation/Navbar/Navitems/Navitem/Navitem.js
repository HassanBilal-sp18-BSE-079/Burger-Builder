import React from 'react';
import classes from './Navitem.module.css';




const Navitem = (props) => {
    return (
        <li className={classes.navitem}>
            <a 
            className={props.active ? classes.active:null}
            href={props.link}>{props.children}</a>
            </li>
      );
}
 
export default Navitem;