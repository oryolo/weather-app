import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as moment from 'moment';
import { iconTypes } from '../utils/iconTypes';
import toCelsius from '../utils/toCelsius';




class DayView extends Component {

    setPrecipIntensity(precipIntensity, precipType) {
        let intensity = precipIntensity * 1000;
        if (intensity < 2.5) {
            return 'Light ' + precipType;
        } else if (intensity >= 2.5 && intensity < 7.6) {
            return 'Moderate ' + precipType;
        } else {
            return 'Heavy ' + precipType;
        }
    }

    renderDayView(dailyData, index) {
        let data = dailyData[index];
        let keys = ['summary', 'icon', 'time', 'apparentTemperatureHigh', 'apparentTemperatureLow', 'humidity', 'precipProbability', 'precipType', 'precipIntensityMax', 'precipIntensityMaxTime', 'windSpeed', 'windBearing'];
        let icon = data.icon;

        data = keys.reduce(function (memo, key) {
            memo[key] = data[key];
            return memo;
        }, {});

        return (
            <div className="inline-flex">
                <div className="bg-white w-64 border-grey-light border-2 text-base mx-2">
                    <div className="flex mb-2">
                        <div className="w-1/2 mx-4 my-4">{iconTypes[icon]}</div>
                        <div className="w-1/2 my-4 text-lg">
                            <div>High {toCelsius(data.apparentTemperatureHigh, this.props.tempInCelsius)}</div>
                            <div>Low {toCelsius(data.apparentTemperatureLow, this.props.tempInCelsius)}</div>
                        </div>
                    </div>
                    <div>Precipitation of {data.precipType} is {Math.floor(data.precipProbability * 100) + '%'}</div>
                    <div>{this.setPrecipIntensity(data.precipIntensityMax, data.precipType)} around {moment(data.precipIntensityMaxTime).format('LT')}</div>
                    <div>Humidity is {Math.floor(data.humidity * 100) + '%'}</div>
                    <div>Windpeed is{Math.floor(data.windSpeed) + " mph"}</div>
                </div>
            </div>
        )
    }

    render() {
        const data = (this.props.daily || {})['data'];
        if (data === undefined) {
            return '';
        }


        return this.renderDayView(data, this.props.selectedDay);
    }
}

const mapStateToProps = (store) => {
    return {
        tempInCelsius: store.tempInCelsius,
        selectedDay: store.selectedDay
    }
}

export default connect(mapStateToProps)(DayView);
