import React from 'react';
import { Link } from 'react-router-dom';

export default function InventoryItem({ item }) {
  console.log('||item ', item);
  return (
    <>
      <Link to={`/inventory-detail/${item.id}`}>
        <li>
          <span>
            {item.item}
          </span>
          <span>
            {item.quantity}
          </span>
        </li>      
      </Link>

    </>
  );
}
