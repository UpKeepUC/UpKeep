import React, { Component } from 'react';

export class Room extends Component {
    static displayName = Room.name;

    render() {

        return (
            <div>
                <h1>Room</h1>
                <p>This page will be used to create Rooms. </p>
            </div>
        );
    }
}