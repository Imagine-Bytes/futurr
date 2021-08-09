import React from 'react';
import './App.css'
import Footer from './components/footer';
import Header from './components/header'
import Home from './pages/Home/Home'


function App() {
  return (
    <React.Fragment>
      <Header button={true}/>
      <Home />
      {/* <Footer /> */}
      </React.Fragment>
  )
}

export default App;
