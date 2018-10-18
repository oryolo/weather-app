import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as moment from 'moment';
import toCelsius from '../utils/toCelsius';
import globalStore from '../store/global_store';
import { CHANGE_SELECTED_DAY } from '../store/actions';
import { iconTypes } from '../utils/iconTypes';

var classNames = require('classnames');


class WeekView extends Component {
    handleDayIndex(index) {
        globalStore.dispatch({
            type: CHANGE_SELECTED_DAY,
            selectedDay: index
        })
        return;
    }

    renderDays = (days) => {
        return days.map((item, index) => {
            let weekDay = moment(item.time * 1000).format('ddd [,] MMM DD');
            
            let tabClass = classNames({
                "flex-1 w-1/4 text-grey-darker text-center bg-grey-lighter p-4 mt-4 hover:bg-blue-lighter": true,
                "pt-2 pr-12 border-blue-light border-t-4 border-r-4 border-l-4 rounded-t": this.props.selectedDay === index,
                "pr-1 border-r-2 border-grey-light": this.props.selectedDay !== index,
            });

            return <li
                key={index}
                className={tabClass}
                onClick={() => this.handleDayIndex(index)} >
                <h4 className="">{index === 0 ? 'Today' : weekDay}</h4>
                <div className="flex mx-1">
                    <div className="w-1/2">
                        <div id="icon">{iconTypes[item.icon]}</div>
                    </div>
                    <div id="temperature" className="w-1/2">
                        <div>{toCelsius(item.temperatureMin, this.props.tempInCelsius)} </div>
                        <div>{toCelsius(item.temperatureMax, this.props.tempInCelsius)} </div>
                    </div>
                </div>
            </li>
        });
    }


    render() {
        const data = (this.props.daily || {})['data'];
        if (data === undefined) {
            return '';
        }
        
        return (
            <React.Fragment>
                <ul className="flex list-reset h-32">{this.renderDays(data)}</ul>
            </React.Fragment>

        );
    }
}

const mapStateToProps = (store) => {
    return {
        tempInCelsius: store.tempInCelsius,
        selectedDay: store.selectedDay
    }
}

export default connect(mapStateToProps)(WeekView);