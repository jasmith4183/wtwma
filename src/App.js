import {twma, wtwma, tpwma} from './orgs.js';
import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import HomeBody from './HomeBody';
import Radar from './Radar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// export const twma={org: "Texas"} 
function App() {
  return (
    <>
    <div className="Main-Div">
        
        
      <Router>
      {/* <Header /> */}
      <Route path="/" exact render={(routeProps)=> (<Header{...routeProps} {...twma}/>)}/>
      <Route path="/wtwma" render={(routeProps)=> (<Header{...routeProps} {...wtwma}/>)}/>
      <Route path="/tpwma" render={(routeProps)=> (<Header{...routeProps} {...tpwma}/>)}/>
      <Route path="/" exact component={HomeBody}/>
      <Route path="/radar" component={Radar}/>
      <Footer />
      </Router>
    </div>
    </>
  );
}

export default App;
