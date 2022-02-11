import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addInventoryItem } from '../../services/fetch-utils';

export default function AddInventory() {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [par, setPar] = useState('');
  const [cost, setCost] = useState('');
  const [price, setPrice] = useState('');
  const [sku, setSku] = useState('');

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    await addInventoryItem({
      item,
      quantity,
      par,
      cost,
      price,
      sku
    });

    history.push('/inventory-list');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='item'>Item</label>
        <input onChange={(e) => setItem(e.target.value)}
          value={item}
          type='text'
          name='item'
          required />
        <label htmlFor='quantity'>Quantity</label>
        <input onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
          type='number'
          name='quantity'
          min='0'
          required />
        <label htmlFor='par'>Par</label>
        <input onChange={(e) => setPar(e.target.value)}
          value={par}
          type='number'
          name='par'
          min='0' />
        <label htmlFor='cost'>Cost</label>
        <input onChange={(e) => setCost(e.target.value)}
          value={cost}
          type='number'
          name='cost'
          min='0'
          step='0.01' />
        <label htmlFor='price'>Price</label>
        <input onChange={(e) => setPrice(e.target.value)}
          value={price}
          type='number'
          name='price'
          min='0'
          step='0.01' />
        <label htmlFor='sku'>SKU</label>
        <input onChange={(e) => setSku(e.target.value)}
          value={sku}
          type='text'
          name='sku' />
        <button type='submit'>Add Item</button>
      </form>
    </>
  );
}