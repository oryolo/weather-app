import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { FETCH_CITY_DATA } from './store/actions';
//import globalStore from 'src/store/global_store';


class Location extends Component {
    
    constructor(props) {
        super(props);
        this.state = {currentCity: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        setTimeout(this.setState({currentCity: event.target.value}), 10000);
         
        
      }

    render() {
        console.log(this.state.currentCity);
        return (
            <div className="flex my-2">
                <h2 className="" onClick={this.props.onClick}>{this.props.cityName}</h2>
                <div 
                    className="ml-2"
                    ><input 
                        type="text" 
                        name="city"
                        onChange={this.handleChange} 
                        className="border-2 border-grey focus:border-blue rounded" 
                        placeholder="City name or zip code..." />
                        <input type="submit" onSubmit={this.handleChange}  />
                        </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
      city: store.currentCity,
    }
  }

export default connect(mapStateToProps)(Location);

