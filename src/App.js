import './App.css';
import React from 'react';
import { useState,
  useEffect } from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';
import Auth from './Components/Auth';
import InventoryList from './Components/InventoryList';
import InventoryDetail from './Components/InventoryDetail';

function App() {
  const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));

  useEffect(() => {

  }, [user]);

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {
            !user
              ? <Auth />
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
      </Switch>
    </Router>
  );
}

export default App;
