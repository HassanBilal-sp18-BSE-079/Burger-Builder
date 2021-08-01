import React from 'react';
import classes from './Navitem.module.css';
import { NavLink } from 'react-router-dom';



const Navitem = (props) => {
    return (
        <li className={classes.navitem}>
            <NavLink to={props.link} activeClassName={classes.active} exact={props.exact}>
                {props.children}
                </NavLink>
            </li>
      );
}
 
export default Navitem;