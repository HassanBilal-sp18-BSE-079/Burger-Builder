import React from 'react';
import Logo from '../logo/logo';
import Navitems from '../Navbar/Navitems/Navitems';
import classes from './SideDrawer.module.css';
import BlackBackground from '../../Model/BlackBackground/BlackBackground';


const SideDrawer = (props) => {
    
    let assignedClasses = [classes.SideDrawer, classes.Close];

    if(props.show){
        assignedClasses = [classes.SideDrawer, classes.Open];
    }
    
    
    return ( 
    
    <React.Fragment>
    <BlackBackground view={props.show} disappearbackground={props.closeSideDrawer} />
    <div className={assignedClasses.join(' ')}>
            <div className={classes.Logo}>
            <Logo />
            </div>
            <nav>
                <Navitems />
            </nav>
    </div> 
    </React.Fragment>);
}
 
export default SideDrawer;