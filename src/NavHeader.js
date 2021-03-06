import React from 'react';
import {NavLink} from 'react-router-dom';

export default function NavHeader() {
    return (
        <div className="Header-Container">
            <div className="Header-Logo"><img src="./logo.png" alt=""></img></div>
            <div className="Header-Text">West Texas Weather Modification Association</div>
            <div className="Nav-Head">
                <nav>
                    <ul className="Nav-Links">
                    <NavLink className="Nav-Head-Item" exact activeClassName="chosen" to="/"><li>Home</li></NavLink>
                    <NavLink className="Nav-Head-Item" activeClassName="chosen" to="/radar"><li>Radar</li></NavLink>
                    <NavLink className="Nav-Head-Item" activeClassName="chosen" to="/forecast"><li>Forecast</li></NavLink>
                    <NavLink className="Nav-Head-Item" activeClassName="chosen" to="/operations"><li>Operations</li></NavLink>
                    <NavLink className="Nav-Head-Item" activeClassName="chosen" to="/analysis"><li>Analysis</li></NavLink>
                </ul>
                </nav>
            </div>
        </div>
    )
}
