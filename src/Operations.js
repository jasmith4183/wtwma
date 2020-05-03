import React, { Component } from 'react'
import MyEditor from './MyEditor'   

export default class Operations extends Component {
    render() {
        return (
            <div>
                Operations
                <MyEditor name="Operations" canEdit={this.props.editAllowed}/>
               
            </div>
        )
    }
}
