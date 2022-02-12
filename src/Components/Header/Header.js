import React from 'react';
import { signOut } from '../../services/fetch-utils';

export default function Header() {
  return (
    <>
      <header>
        <button onClick={signOut}>SignOut</button>
        <h1>Inventory App</h1>
      </header>
    </>
  );
}