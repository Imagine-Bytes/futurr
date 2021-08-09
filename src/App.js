import React from 'react';
import './App.css'
import Footer from './components/footer';
import Header from './components/header'


function App() {
  return (
    <React.Fragment>
      <Header button={true}/>
      <Footer />
      </React.Fragment>
  )
}

export default App;
