import React from 'react';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/Burger-Builder/BurgerBuilder';
import CheckOut from './containers/CheckOut/CheckOut';
import {Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div>
     <Layout>
       <Switch>
         <Route path='/' exact component={BurgerBuilder} />
         <Route path='/checkout' component={CheckOut} />
       </Switch>
     </Layout>
    </div>
  );
}

export default App;
