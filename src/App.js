import './App.css';
import React from 'react';
import { useState,
  useEffect } from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';



function App() {
  const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));

  useEffect(() => {

  }, [user]);

  return (
    <>
      <Header user={user} />
      <Main user={user} />
      <Footer />
    </>
  );
}

export default App;
