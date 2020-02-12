import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Header(props) {
    return (
        <div className="Header-Container">
            <div className="Header-Logo"><img src="./Picture1.png" alt=""></img></div>
            <div className="Header-Text">{props.org}</div>
            <div className="Nav-Head">
                {/* <nav> */}
                    <ul className="Nav-Head-Links"> 
                    <NavLink className="Nav-Head-Item" exact activeClassName="chosen" to="/"><li>Home</li></NavLink>
                    <NavLink className="Nav-Head-Item" activeClassName="chosen" to="/wtwma/radar"><li>Radar</li></NavLink>
                    <NavLink className="Nav-Head-Item" activeClassName="chosen" to="/wtwma/forecast"><li>Forecast</li></NavLink>
                    <NavLink className="Nav-Head-Item" activeClassName="chosen" to="/wtwma/operations"><li>Operations</li></NavLink>
                    <NavLink className="Nav-Head-Item" activeClassName="chosen" to="/wtwma/analysis"><li>Analysis</li></NavLink>
                </ul>
                {/* </nav> */}
            </div>
        </div>
    )
}
