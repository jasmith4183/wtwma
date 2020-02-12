import {twma, wtwma, tpwma} from './orgs.js';
import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import HomeBody from './HomeBody';
import Radar from './Radar';
import Forecast from './Forecast';
import Operations from './Operations';
import {BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
    <>
    <div className="Main-Div">
        
        
      <Router>
      {/* <Header /> */}
      <Route path="/" exact render={(routeProps)=> (<Header{...routeProps} {...twma}/>)}/>
      <Route path="/" exact component={HomeBody}/>
      
      <Route path="/wtwma" render={(routeProps)=> (<Header{...routeProps} {...wtwma}/>)}/>
      <Route path="/wtwma/radar" component={Radar}/>
      <Route path="/wtwma/forecast" component={Forecast}/>
      <Route path="/wtwma/operations" component={Operations}/>
      
      <Route path="/tpwma" render={(routeProps)=> (<Header{...routeProps} {...tpwma}/>)}/>
      
      <Footer />
      </Router>
    </div>
    </>
  );
}

export default App;
