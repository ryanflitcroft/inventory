import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Auth from './Auth';
import InventoryList from './InventoryList';
import InventoryDetail from './InventoryDetail';
import { signOut } from '../../services/fetch-utils';

export default function Main({ user,
  setUser }) {
  return (
    <>
      <main>
        <button onClick={signOut}>SignOut</button>
        <Router>
          <Switch>
            <Route exact path='/'>
              {!user
                ? <Auth setUser={setUser} />
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
