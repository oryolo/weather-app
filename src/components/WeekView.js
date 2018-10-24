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
            let weekDay = moment(item.time * 1000).format('ddd[,] MMM DD');

            let tabClass = classNames({
                "flex-1 w-1/4 text-grey-darker text-center p-4  bg-white align-middle": true,
                "pt-2 pr-12  border-r-2 rounded-t bg-blue-lighter": this.props.selectedDay === index,
                "pr-1 border-r-2 border-grey-light": this.props.selectedDay !== index,
                
            });

            let uvIndexClass = classNames({
                "mt-8": true,
                "text-green": item.uvIndex <= 5,
                "text-red": item.uvIndex > 5
            });

            return <li
                key={index}
                className={tabClass}
                onClick={() => this.handleDayIndex(index)} >
                <h4 className="my-4">{index === 0 ? 'Today' : weekDay}</h4>
                <div className="flex mx-1">
                    <div className="w-1/2">
                        <div id="icon">{iconTypes[item.icon]}</div>
                    </div>
                    <div id="temperature" className="w-1/2">
                        <div>{toCelsius(item.temperatureMin, this.props.tempInCelsius)} </div>
                        <div>{toCelsius(item.temperatureMax, this.props.tempInCelsius)} </div>
                    </div>
                </div>
                <div id="uvIndex" className={uvIndexClass}>UVIndex: {item.uvIndex}</div>
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
                <ul className="flex list-reset h-48">{this.renderDays(data)}</ul>
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