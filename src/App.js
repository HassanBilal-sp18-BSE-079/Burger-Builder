import React from 'react';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/Burger-Builder/BurgerBuilder';
import CheckOut from './containers/CheckOut/CheckOut';
import {Route,Switch} from 'react-router-dom';
import Orders from './containers/Orders/Orders';

function App() {
  return (
    <div>
     <Layout>
       <Switch>
         <Route path='/' exact component={BurgerBuilder} />
         <Route path='/checkout' component={CheckOut} />
         <Route path='/orders' component={Orders} />
       </Switch>
     </Layout>
    </div>
  );
}

export default App;
