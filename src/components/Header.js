import React, { Component } from 'react';
import globalStore from '../store/global_store';
import { connect } from 'react-redux';
import { CHANGE_TEMP_SCALE } from '../store/actions';

import '../styles/index.css';

class Header extends Component {
    handleTempScale = () => {
        globalStore.dispatch({
            type: CHANGE_TEMP_SCALE,
        })
        return;
    }

    getButton(tempInCelsius) {
        let buttonProps = {
            className: "bg-blue h-10 w-10 align-middle mhover:bg-blue-dark text-white font-bold rounded",
            onClick: this.handleTempScale
        }
        return tempInCelsius ? <button {...buttonProps}>&#8451;</button> : <button {...buttonProps}>&#8457;</button>
    }

    render() {
        return (
            <ul className="list-reset flex bg-blue-lighter fixed pt-4 pl-16 pin-t pin-x z-100 h-auto shadow">
                <li id="logo" className="mx-24">
                    <div className="flex items-center text-white mr-6">
                        <img src="http://www.czewa24.pl/images/12230/fa617a44d10feca59c61aad87fb3e41a.png" alt="logo" className="fill-current h-8 w-8 mr-2" />
                        <span className="font-semibold text-xl tracking-tight">Weather</span>
                    </div>
                </li>
                <li className="block mb-4 mr-3">
                    {this.getButton(this.props.tempInCelsius)}
                </li>
            </ul>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        tempInCelsius: store.tempInCelsius
    }
}

export default connect(mapStateToProps)(Header);