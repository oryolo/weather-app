import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Location from './Location';
import WeekView from './WeekView';
import HourlyView from './HourlyView';
import DailyAddition from './DailyAddition';


class PageView extends Component {
    render() {
        const pageViewStyle = classNames({
            "flex justify-center": true,
            "ml-32": this.props.showDrawer
        })

        return (
            <div className={pageViewStyle}>
                <div className="w-3/4 my-24 h-screen">
                    <Location
                        cityName={this.props.cityName} />
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

const mapStateToProps = (store) => {
    return {
        showDrawer: store.showDrawer
    }
}

export default connect(mapStateToProps)(PageView); 