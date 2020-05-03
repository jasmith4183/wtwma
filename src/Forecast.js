import React, { Component } from 'react'
import MyEditor from './MyEditor' 

export default class Forecast extends Component {
    render() {
        return (
            <div>
                <p>Update Forecast</p>
        <MyEditor name="Forecast" canEdit={this.props.editAllowed}/>
            </div>
        )
    }
}
