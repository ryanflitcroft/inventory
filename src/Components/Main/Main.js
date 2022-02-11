import React from 'react';
import { useEffect,
  useState } from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { signOut, 
  getInventory } from '../../services/fetch-utils';
import Auth from './Auth';
import InventoryList from './InventoryList';
import InventoryDetail from './InventoryDetail';
import AddInventory from './AddInventory';

export default function Main({ user,
  setUser }) {

  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await getInventory();
      setInventory(data);
    }
    getData();
  }, []);

  return (
    <>
      <main>
        <button onClick={signOut}>SignOut</button>
        <Router>
          <Switch>
            <Route exact path='/'>
              {
                !user
                  ? <Auth setUser={setUser} />
                  : <InventoryList inventory={inventory} />
              }
            </Route>
            <Route exact path='/inventory-list'>
              {
                user
                  ? <InventoryList inventory={inventory} />
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
