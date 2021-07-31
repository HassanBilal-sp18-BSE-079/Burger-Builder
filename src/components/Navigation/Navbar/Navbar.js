import React from 'react';
import classes from './Navbar.module.css';
import Logo from '../logo/logo';
import Navitems from './Navitems/Navitems';
import {FiMenu} from 'react-icons/fi';


const Navbar = (props) => {
    return ( 
        <div className={classes.navbar}>
            <div className={classes.navlinks}>
                <FiMenu style={{fontSize: 30 }} className={classes.menu} onClick={props.SideDrawerToggle} />
            </div>
            <Logo />
            <div className={[classes.navlinks , classes.DesktopOnly].join(' ')}>
                <Navitems />
            </div>
        </div>
     );
}
 
export default Navbar;