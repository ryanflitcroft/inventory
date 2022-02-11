import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getInventoryItem } from '../../services/fetch-utils';

export default function InventoryDetail() {
  const params = useParams();
  console.log('||params', params);

  useEffect(() => {
    async function getData() {
      await getInventoryItem(params.id);
    }
  }, []);

  return (
    <>

    </>
  );
}
