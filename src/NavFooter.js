import React from 'react'

export default function NavFooter() {
    return (
    <>
        <div className="Footer-Container">
            <div className="Nav-Footer-Main">
                <div className="Nav-Footer-Section-1">
                    <h3>Weather Links</h3>
                    <ul> 
                        <li>West Texas Sat Img</li>
                        <li>West Texas IR Img</li>
                        <li>Texas Water Vapor Img</li>
                        <li>San Angelo NWS</li>
                        <li> Midland NWS</li>
                        <li>Storm Prediction Center</li>
                        <li>West Texas Mesonet</li>
                        <li>CoCoRaHS</li>
                    </ul>
                </div>
                <div className="Nav-Footer-Section-2">
                    <h3>Weather Modification</h3>
                    <ul>
                    <li> Texas Wx Mod Assoc.</li>
                    <li> South Tx Wx Mod Assoc.</li>
                    <li> Panhandle GWCD</li>
                    <li> Trans-Pecos WMA</li>
                    <li>SOAR</li>
                    <li>Weather Mod. Assoc.</li>
                    </ul>
                </div>
                <div className="Nav-Footer-Section-3">
                    <h3>Research</h3>
                    <ul>
                    <a href="http://ncar.ucar.edu/"><li>NCAR</li></a>
                    <a href="http://www.swri.org/"><li>SwRI</li></a>
                    <a href="http://www.dri.edu/"><li>DRI</li></a>
                </ul>
                </div>
            </div>
        </div>
</>
    )
}
