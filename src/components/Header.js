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
            className: "bg-blue h-10 w-10 my-2 mx-16 mhover:bg-blue-dark text-white font-bold rounded",
            onClick: this.handleTempScale
        }
        return tempInCelsius ? <button {...buttonProps}>&#8451;</button> : <button {...buttonProps}>&#8457;</button>
    }

    render() {
        return (
            <div className="flex justify-between py-2 px-32 bg-blue-lighter fixed pin-t pin-x z-100 h-auto shadow">
                <div id="logo" className="mx-12">
                    <span>
                        <img src="https://goo.gl/VzmXUe" alt="logo" className="w-10 h-10 rounded-full" />
                    </span>
                </div>
                {this.getButton(this.props.tempInCelsius)}
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        tempInCelsius: store.tempInCelsius
    }
}

export default connect(mapStateToProps)(Header);