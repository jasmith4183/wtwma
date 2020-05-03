import React from 'react';
import './App.css';
import NavFooter from './NavFooter';
import NavHeader from './NavHeader';
import HomeBody from './HomeBody';
import Radar from './Radar';
import Forecast from './Forecast';
import Operations from './Operations';
import Admin from './Admin';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <div className="Main-Div">
        
        
      <Router>
      <NavHeader />
      <Route path="/" exact component={HomeBody}/>
      <Route path="/radar" component={Radar}/>
      <Route path="/forecast" exact render={(routeProps)=> (<Forecast{...routeProps} editAllowed={false}/>)}/>
      <Route path="/forecast/edit" exact render={(routeProps)=> (<Forecast{...routeProps} editAllowed={true}/>)}/>
      {/* <Route path="/wtwma" render={(routeProps)=> (<Header{...routeProps} {...wtwma}/>)}/> */}
      <Route path="/operations" exact render={(routeProps)=> (<Operations{...routeProps} editAllowed={false}/>)}/>
      <Route path="/operations/edit" exact render={(routeProps)=> (<Operations{...routeProps} editAllowed={true}/>)}/>
      <Route path="/admin" component={Admin}/>
      <NavFooter />
      </Router>
    </div>
    </>
  );
}

export default App;
