import React, { Component } from 'react';
import classNames from 'classnames';
import globalStore from '../store/global_store';
import { SHOW_DRAWER } from '../store/actions';


class Drawer extends Component {
    closeNav() {
        globalStore.dispatch({
            type: SHOW_DRAWER,
        })
    }
    render() {
        const textStyle = classNames({
            "text-left ml-2 my-2 text-lg": true
        })
        return (
            <div className="h-full w-64 fixed z-100 pin-t pin-l bg-grey-lighter shadow-md">
                <button className="absolute pin-t mt-4 ml-24" onClick={this.closeNav}>&#215;</button>
                <div className="mx-2 my-16">
                    <p className={textStyle}>My name is Olga Orel. I created this website using React and Redux</p>
                    <p className={textStyle}>This web application is a part of my educational project. I took data from <a href="https://darksky.net/dev">DrakSky API</a></p>
                    <p className={textStyle}>View my code on <a href="https://github.com/oryolo/weather-app">Github</a></p>
                    <p className={textStyle}><a href="mailto:olga.s.eagle@gmail.com">Email</a> me</p>
                </div>

            </div>
        )
    }

}

export default Drawer;

