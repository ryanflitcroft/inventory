import React from 'react';

export default function InventoryItem({ item }) {
  console.log('||item ', item);
  return (
    <>
      <li>
        <span>
          {item.item}
        </span>
        <span>
          {item.quantity}
        </span>
      </li>
    </>
  );
}
