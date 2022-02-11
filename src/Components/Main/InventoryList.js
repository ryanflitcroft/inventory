import React from 'react';
import { Link } from 'react-router-dom';
import InventoryItem from './InventoryItem';

export default function InventoryList({ inventory }) {
  console.log('||inv', inventory);

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