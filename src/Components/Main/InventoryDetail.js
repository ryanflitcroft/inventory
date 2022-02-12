import React from 'react';
import { useState,
  useEffect } from 'react';
import { useParams,
  useHistory } from 'react-router-dom';
import { getInventoryItem } from '../../services/fetch-utils';
import { deleteItem } from '../../services/fetch-utils';

export default function InventoryDetail() {
  const [item, setItem] = useState({});
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    async function getData() {
      const data = await getInventoryItem(params.id);
      setItem(data);
    }
    getData();  
  }, [params]);

  async function handleDelete() {
    await deleteItem(params.id);
    history.push('/inventory-list');
  }

  return (
    <>
      <section>
        <h2>{item.item} Details</h2>
        <ul>
          <li>quantity: <span>{item.quantity}</span></li>
          <li>par: <span>{item.par}</span></li>
          <li>cost: <span>{item.cost}</span></li>
          <li>price: <span>{item.price}</span></li>
          <li>sku: <span>{item.sku}</span></li>
        </ul>
        <button onClick={handleDelete}
          type='button'>Delete Item</button>
      </section>
    </>
  );
}
