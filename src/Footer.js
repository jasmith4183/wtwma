import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Footer() {
    return (
    <>
        <div className="Footer-Container">
            <div className="Nav-Footer-Main">
                <div className="Nav-Footer-Section Nav-Footer-Section-1">
                    <h3>Weather Links</h3>
                    <ul> 
                        <li>West Texas Sat Img</li>
                        <li>West Texas IR Img</li>
                        <li>Texas Water Vapor Img</li>
                        <li>San Angelo NWS</li>
                        <li>Midland NWS</li>
                        <li>Storm Prediction Center</li>
                        <li>West Texas Mesonet</li>
                        <li>CoCoRaHS</li>
                    </ul>
                </div>
                <div className="Nav-Footer-Section Nav-Footer-Section-2">
                    <h3>Weather Modification Links</h3>
                    <ul>
                        <NavLink to="/wtwma"><li>WTWMA</li></NavLink>
                        <NavLink to="/tpwma"><li>TPWMA</li></NavLink>
                        <NavLink to="/"><li>Texas</li></NavLink>
                        <li><a href="http://southtexasweathermodification.com/">South Tx Wx Mod Assoc.</a></li>
                        <li><a href="http://pgcd.us/">Panhandle GWCD</a></li>
                        <li><a href="http://www.just-clouds.com/">SOAR</a></li>
                        <li><a href="http://www.weathermodification.org/">Weather Mod. Assoc.</a></li>
                    </ul>
                </div>
                <div className="Nav-Footer-Section Nav-Footer-Section-3">
                    
                </div>
            </div>
        </div>
</>
    )
}
