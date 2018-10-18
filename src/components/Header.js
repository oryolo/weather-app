import React, { Component } from 'react';
import '../styles/index.css';
//var classNames = require('classnames');



class Header extends Component {

    render() {
        return (
            <div className="flex justify-between bg-blue-lighter fixed pin-t pin-x z-100 h-16">
                <div id="logo" className="px-4 py-2 m-1">
                    <span>
                        <img src="https://goo.gl/VzmXUe" alt="logo" className="w-12 h-12 pb-1" />
                    </span>
                </div>
                <div id="search-input" className="px-4 py-2 m-2">
                    <input
                        type="search"
                        className="w-26 rounded focus:w-30 bg-grey-lighter focus:bg-white border-transparent focus:border-blue-light h-10" placeholder="Search" />
                    {/* <button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full">Go!</button> */}
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Header;