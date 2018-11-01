import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drawer from './Drawer';
import globalStore from '../store/global_store';
import { SHOW_DRAWER } from '../store/actions';
import classNames from 'classnames';


class Footer extends Component {
    openNav(){
        globalStore.dispatch({
            type: SHOW_DRAWER,
        })
    }

    render() {
        const liStyle = classNames({
            "flex-1 mx-2 my-2 hover:text-white": true
        })
        return (
            <div className="fixed pin-b pin-l w-full h-8 text-center bg-blue-lighter">
                    <p onClick={this.openNav} className={liStyle}>About</p>
            {this.props.showDrawer ? <Drawer /> : null}
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        showDrawer: store.showDrawer
    }
   
}

export default connect(mapStateToProps)(Footer);