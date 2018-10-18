import React, { Component } from 'react';
import Location from './Location';
import WeekView from './WeekView';
import HourlyView from './HourlyView';
import DailyAddition from './DailyAddition';

export default class PageView extends Component {

    render() {
        return (
            <div className="mt-20">
                <Location
                    cityName={this.props.cityName}
                    onClick={this.setCityName} />
                <WeekView
                    daily={this.props.daily}
                />
                <HourlyView hourly={this.props.hourly}
                    daily={this.props.daily}/>
                <DailyAddition daily={this.props.daily}/>
            </div>
        )
    }
}