import React, { Component } from 'react';
import { connect } from 'react-redux';
import toCelsius from '../utils/toCelsius';
import DayView from './DayView';
//import globalStore from '../store/global_store';
import { iconTypes } from '../utils/iconTypes';
import { WiHumidity } from 'weather-icons-react';

//var classNames = require('classnames');


class HourlyView extends Component {

    renderHourlyData(hourlyData, index) {
        const hour = new Date(hourlyData.time * 1000).getHours();
        const bgStyle = {
            backgroundImage: 'url(http://placehold.it/3/ECCEF5?text=)',
            backgroundPosition: "10% " + (100 - hourlyData.temperature / 1.2) + "%",
        }
        return (
            <li style={bgStyle} key={index} className="flex-1 bg-repeat-x bg-white hover:bg-grey-lighter text-grey-darker text-center px-4 py-4 m-1">
                <div><h4>{hour + ':00'}</h4></div>
                <div id="temperature" className="pt-5">{toCelsius(hourlyData.temperature, this.props.tempInCelsius)}</div>
                <div id="icon">{iconTypes[hourlyData.icon]}</div>
                <div id="humidity" className="py-13"><WiHumidity />{Math.round(hourlyData.humidity * 100) + '%'}</div>
            </li>
        )
    }

    renderHourlyNext48 = (hourly) => {
        let breakPoint = 10;
        let every3hours = [];

        for(let i = 0; i < hourly.length; i +=2 ) {
            every3hours.push(hourly[i]);
        }

        switch (this.props.selectedDay) {
            case 0:
                return every3hours.slice(0, breakPoint).map((hourlyData, index) => this.renderHourlyData(hourlyData, index));
            case 1:
                return every3hours.slice(breakPoint, breakPoint + 12).map((hourlyData, index) => this.renderHourlyData(hourlyData, index));
            case 2:
                return every3hours.slice(breakPoint + 12).map((hourlyData, index) => this.renderHourlyData(hourlyData, index));
            default:
                return <DayView daily={this.props.daily}/>;
        }
    }


    render() {
        const data = (this.props.hourly || {})['data'];
        if (data === undefined) {
            return '';
        }
        return (
            <ul className="flex list-reset items-strech bg-blue-lighter h-48 overflow-x-scroll">
                {this.renderHourlyNext48(data)}
            </ul>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        tempInCelsius: store.tempInCelsius,
        selectedDay: store.selectedDay
    }
}

export default connect(mapStateToProps)(HourlyView)
