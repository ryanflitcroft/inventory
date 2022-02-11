import React from 'react';
import { useState,
  useEffect } from 'react';
import { Link } from 'react-router-dom';
import InventoryItem from './InventoryItem';
import { getInventory } from '../../services/fetch-utils';

export default function InventoryList() {

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
      <Link to='/add-inventory'>
        <button>Add Inventory</button>
      </Link>
      <h2>Current Inventory</h2>
      <section>
        <ul>
          {
            inventory.map((item, i) =>
              <InventoryItem key={`${item.item}-${i}`}
                item={item} />
            )
          }
        </ul>
      </section>
    </>
  );
}