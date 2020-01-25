import React from 'react'

export default function NavFooter() {
    return (
    <>
        <div className="Footer-Container">
            <div className="Nav-Footer-Main">
                <div className="Nav-Footer-Section">
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
                <div className="Nav-Footer-Section">
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
                <div className="Nav-Footer-Section">
                    <h3>Research</h3>
                    <ul>
                    <li>NCAR</li>
                    <li>SwRI</li>
                    <li>DRI</li>
                </ul>
                </div>
            </div>
        </div>
</>
    )
}
