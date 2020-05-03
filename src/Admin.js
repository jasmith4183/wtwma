import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

export default class Admin extends Component {
    render() {
        return (
            <div>
                <NavLink to="/forecast/edit"><li>Edit Forecast</li></NavLink>
            </div>
        )
    }
}
