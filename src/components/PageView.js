import React from 'react';
import Location from './Location';
import WeekView from './WeekView';
import HourlyView from './HourlyView';
import DailyAddition from './DailyAddition';

export default function PageView(props) {
    return (
        <div className="flex justify-center ">
            <div className="w-3/4 my-24 h-screen">
                <Location 
                    cityName={props.cityName} />
                <div className="border-2 rounded shadow-lg">
                    <WeekView
                        daily={props.daily} />
                    <HourlyView
                        hourly={props.hourly}
                        daily={props.daily} />
                    <DailyAddition
                        daily={props.daily} />
                </div>
            </div>
        </div>
    )
}