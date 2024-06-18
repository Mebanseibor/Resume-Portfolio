import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import "./App.css";

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Homepage/>
      <Footer/>
    </div>
  );
}

export default App;