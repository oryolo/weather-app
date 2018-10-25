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
            <div className="flex bg-blue-lighter my-4">
                <div id="mainInfo" className="m-4">
                    <div className="mx-4">{iconTypes[icon]}</div>
                    <div className="inline-flex my-2">
                        <div>High <div className=" mx-2 text-3xl">{toCelsius(data.apparentTemperatureHigh, this.props.tempInCelsius)}</div></div>
                        <div>Low <div className="mx-2 text-3xl">{toCelsius(data.apparentTemperatureLow, this.props.tempInCelsius)}</div></div>
                    </div>
                </div>
                <div id="description" className="mt-4 ml-16">
                    <div className="mb-2">Precipitation of {data.precipType} is {Math.floor(data.precipProbability * 100) + '%'}</div>
                    <div className="mb-2">{this.setPrecipIntensity(data.precipIntensityMax, data.precipType)} around {moment(data.precipIntensityMaxTime).format('LT')}</div>
                    <div className="mb-2">Humidity is {Math.floor(data.humidity * 100) + '%'}</div>
                    <div className="mb-2">Windspeed is {Math.floor(data.windSpeed) + " mph"}</div>
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
