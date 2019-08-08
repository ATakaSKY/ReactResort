import React, { Component } from 'react'
import {RoomContext} from '../context'

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        console.log(this.context);
        return (
            <div>
                
            </div>
        )
    }
}
