import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom';
import Auth from './Auth';
import InventoryList from './InventoryList';
import InventoryDetail from './InventoryDetail';
import AddInventory from './AddInventory';

import { useEffect } from 'react';

export default function Main({ user,
  setUser }) {

  useEffect(() => {
  }, []);

  return (
    <>
      <main>
        <Router>
          {/* TODO: render NavLink conditional to url */}
          <NavLink to='/inventory-list'>Inventory List</NavLink>
          <Switch>
            <Route exact path='/'>
              {
                !user
                  ? <Auth setUser={setUser} />
                  : <InventoryList />
              }
            </Route>
            <Route exact path='/inventory-list'>
              {
                user
                  ? <InventoryList />
                  : <Redirect to='/' />
              }
            </Route>
            <Route exact path='/inventory-detail/:id'>
              {
                user
                  ? <InventoryDetail />
                  : <Redirect to='/' />
              }
            </Route>
            <Route exact path='/add-inventory'>
              {
                user
                  ? <AddInventory />
                  : <Redirect to='/' />
              }
            </Route>
          </Switch>
        </Router>
      </main>
    </>
  );
}