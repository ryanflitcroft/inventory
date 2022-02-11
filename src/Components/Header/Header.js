import React from 'react';
import { signOut } from '../../services/fetch-utils';

export default function Header() {
  return (
    <>
      <header>
        <button onClick={signOut}>SignOut</button>
      </header>
    </>
  );
}
