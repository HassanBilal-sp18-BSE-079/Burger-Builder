import React,{Fragment, useState} from 'react';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';




const Layout = (props) => {

  let [showSideddrawer ,setShowSideddrawer ] = useState(false);



  let ShowSideDrawerHandler = ()=>{
    setShowSideddrawer(false);
  }


  let SideDrawerTogglehandler = ()=>{
    setShowSideddrawer(!showSideddrawer);
    console.log('menu button');
  }






    return (
      <Fragment>
       <Navbar SideDrawerToggle={SideDrawerTogglehandler} />
       <SideDrawer show={showSideddrawer}  closeSideDrawer={ShowSideDrawerHandler}/>
        <main style={{marginTop:100}}>
          {props.children}
        </main>
      </Fragment>

      );
}
 
export default Layout;