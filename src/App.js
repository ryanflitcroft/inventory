import './App.css';
import React from 'react';
import { useState,
  useEffect } from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import getUser from './services/fetch-utils';


function App() {
  const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));

  useEffect(() => {
    const data = getUser();
    console.log('||data', data);
    setUser(data);
  }, [user]);

  return (
    <>
      <Header user={user} />
      <Main user={user}
        setUser={setUser} />
      <Footer />
    </>
  );
}

export default App;