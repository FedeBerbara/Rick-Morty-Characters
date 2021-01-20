import React from 'react';

//* Styles
import './assets/styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//* Components
import Header from './components/Header/Header';
import Characters from './components/Characters/Character';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Characters />
      <Footer />
    </>
  );
}

export default App;