import React, { Component } from 'react';
import Location from './Location';
import WeekView from './WeekView';
import HourlyView from './HourlyView';
import DailyAddition from './DailyAddition';

export default class PageView extends Component {

    render() {
        return (
            <div className="flex justify-center ">
                <div className="w-3/4 my-24 h-screen">
                    <Location
                        cityName={this.props.cityName}
                        onClick={this.setCityName} />
                    <div className="border-2 rounded shadow-lg">
                        <WeekView
                            daily={this.props.daily} />
                        <HourlyView
                            hourly={this.props.hourly}
                            daily={this.props.daily} />
                        <DailyAddition 
                            daily={this.props.daily} />
                    </div>

                </div>
            </div>

        )
    }
}