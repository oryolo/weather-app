import React, { Component } from 'react';
import { connect } from 'react-redux';
import { iconTypes } from '../utils/iconTypes';
//const classNames = require('classnames');


class DailyAddition extends Component {

    getSunAndMoonData(days, selectedDay) {
        let result = [];
        days.map(day => {
            let up = new Date(day.sunriseTime * 1000);
            let down = new Date(day.sunsetTime * 1000);
            let moonPhase = Math.floor(day.moonPhase * 100) + '%';
            let sunriseTime = ((up.getHours() < 10 ? '0' : '') + up.getHours()) + ':' + (up.getMinutes() < 10 ? '0' : '') + up.getMinutes();
            let sunsetTime = ((down.getHours() < 10 ? '0' : '') + down.getHours()) + ':' + (down.getMinutes() < 10 ? '0' : '') + down.getMinutes();
            let dailySunTime = Array.of(sunriseTime, sunsetTime, moonPhase);
            return result.push(dailySunTime);
        })
        return (
            <div className="flex">
                <div className="flex-1 text-left px-4 py-2 m-2">
                    {iconTypes.sunrise}
                    {result[selectedDay][0]}
                </div>
                <div className="flex-1 text-left px-4 py-2 m-2">
                    {iconTypes.sunset}
                    {result[selectedDay][1]}
                </div>
                <div className="flex-1 text-center px-4 py-2 m-2">{iconTypes.moon} {result[selectedDay][2]}</div>
            </div>
        );
    }



    render() {
        const data = (this.props.daily || {})['data'];
        if (data === undefined) {
            return '';
        }

        const sunAndMoon = <div id="time" className="">{this.getSunAndMoonData(data, this.props.selectedDay)}</div>;
        return (
            <div>
                {sunAndMoon}
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        selectedDay: store.selectedDay
    }
}

export default connect(mapStateToProps)(DailyAddition);