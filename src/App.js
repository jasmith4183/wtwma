import React from 'react';
import './App.css';
import NavFooter from './NavFooter';
import NavHeader from './NavHeader';
import HomeBody from './HomeBody';
import Radar from './Radar';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <div className="Main-Div">
        
        
      <Router>
      <NavHeader />
      <Route path="/" exact component={HomeBody}/>
      <Route path="/radar" component={Radar}/>
      <NavFooter />
      </Router>
    </div>
    </>
  );
}

export default App;
