import React, { Component } from 'react';

export default class Location extends Component {
    render() {
        return (
            <div>
                <h2 onClick={this.props.onClick}>{this.props.cityName}</h2>
            </div>
        )
    }
}
