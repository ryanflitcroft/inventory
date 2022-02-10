import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Auth from './Auth';
import InventoryList from './InventoryList';
import InventoryDetail from './InventoryDetail';

export default function Main({ user }) {
  return (
    <>
      <main>
        <Router>
          <Switch>
            <Route exact path='/'>
              {!user
                ? <Auth />
                : <InventoryList />}
            </Route>
            <Route exact path='/inventory-list'>
              {user
                ? <InventoryList />
                : <Redirect to='/' />}
            </Route>
            <Route exact path='/inventory-detail/:id'>
              {user
                ? <InventoryDetail />
                : <Redirect to='/' />}
            </Route>
          </Switch>
        </Router>
      </main>
    </>
  );
}
