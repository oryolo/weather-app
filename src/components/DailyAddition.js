import React, { Component } from 'react';
import { connect } from 'react-redux';
import { iconTypes } from '../utils/iconTypes';
const classNames = require('classnames');


class DailyAddition extends Component {


    getUvIndexForSelectedDay(array, selectedDay) {
        const uvIndexArray = array.map(day => day.uvIndex);
        return uvIndexArray[selectedDay];
    }

    getSunsTime(days, selectedDay) {
        let result = [];
        days.map(day => {
            let up = new Date(day.sunriseTime * 1000);
            let down = new Date(day.sunsetTime * 1000);
            let sunriseTime = ((up.getHours() < 10 ? '0' : '') + up.getHours()) + ':' + (up.getMinutes() < 10 ? '0' : '') + up.getMinutes();
            let sunsetTime = ((down.getHours() < 10 ? '0' : '') + down.getHours()) + ':' + (down.getMinutes() < 10 ? '0' : '') + down.getMinutes();
            let dailySunTime = Array.of(sunriseTime, sunsetTime);
            return result.push(dailySunTime);
        })
        return (
            <div className="flex">
                <div className="w-1/2">
                    {iconTypes.sunrise}
                    {result[selectedDay][0]}
                </div>
                <div className="w-1/2">
                    {iconTypes.sunset}
                    {result[selectedDay][1]}
                </div>
            </div >);
    }

    render() {
        const data = (this.props.daily || {})['data'];
        if (data === undefined) {
            return '';
        }

        let uvIndexValue = this.getUvIndexForSelectedDay(data, this.props.selectedDay);
        let uvIndexClass = classNames({
            "w-1/2 text-right": true,
            "text-green": uvIndexValue <= 5,
            "text-red": uvIndexValue > 5
        });
        
        const uvIndex = <div id="uvIndex" className={uvIndexClass}>UVIndex: {this.getUvIndexForSelectedDay(data, this.props.selectedDay)}</div>;
        const sunriseTime = <div id="time" className="w-1/2 text-right">{this.getSunsTime(data, this.props.selectedDay)}</div>;
        return (
            <div className="flex" >
                {uvIndex}
                {sunriseTime}
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