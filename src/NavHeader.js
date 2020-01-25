import React from 'react';
import {Link} from 'react-router-dom';

export default function NavHeader() {
    return (
        <div className="Header-Container">
            <div className="Header-Logo"><img src="./Untitled.png" className="Header-Logo-Img" alt=""></img></div>
            <div className="Header-Text">West Texas Weather Modification Association</div>
            <div className="Nav-Head">
                <nav>
                    <ul className="Nav-Links">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/radar"><li>Radar</li></Link>
                    <Link to="/"><li>Forecast</li></Link>
                    <Link to="/"><li>Research</li></Link>
                    <Link to="/"><li>Climatology</li></Link>
                </ul>
                </nav>
            </div>
        </div>
    )
}
