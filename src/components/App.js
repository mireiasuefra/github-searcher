import '../styles/App.scss';
import { useEffect, useState } from 'react';
//import callToApi from '../services/api';

function App() {
  
  // api

  //const [data, setData] = useState({});

  /*
  useEffect(() => {
    callToApi().then((response) => {
      data(response);
    });
  }, []);
  */

  /*
  useEffect(() => {
    localStorage.set('name', name);
    localStorage.set('email', email);
  }, [name, email]);
  */



  return (
    // HTML ✨

    <div className="app">Hola Mundo!</div>
  );
}

export default App;
