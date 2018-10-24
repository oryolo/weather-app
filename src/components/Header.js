import React, { Component } from 'react';
import '../styles/index.css';
//var classNames = require('classnames');



class Header extends Component {

    render() {
        return (
            <div className="flex justify-around bg-blue-lighter fixed align-middle pin-t pin-x z-100 h-auto shadow">
                <div id="logo" className="py-2 ">
                    <span>
                        <img src="https://goo.gl/VzmXUe" alt="logo" className="w-16 h-16 rounded-full" />
                    </span>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Header;