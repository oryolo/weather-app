import React, { Component } from 'react';

import axios from 'axios';
import Header from './components/Header';
//import Footer from './components/Footer';
import PageView from './components/PageView';
import './index.css';
//import Spinner from "../src/images/spin.webp";
import { connect } from 'react-redux';
import { FETCH_CITY_DATA, CHANGE_TEMP_SCALE } from './store/actions';
import globalStore from './store/global_store';

//const initialData = window.__INITIAL_STATE__;

class App extends Component {

  /* constructor(props) {
    super(props);
    this.state = {
      selectedDay: 0,
      city: {},
      cityId: initialData.defaultCityId,
      isLoading: false,
      inCelsius: false
    }
    this.handleDayChange = this.handleDayChange.bind(this);
  } */


  loadCity = () => {
    return axios.get("/cities/5406990.json")
      .then(response => {
        globalStore.dispatch({
          type: FETCH_CITY_DATA,
          currentCity: response.data
        })
      })
      .catch(error => {
        console.log("Error *** : " + error);
      });

  }

  componentDidMount() {
    this.loadCity();
  }

  handleTempScale = () => {
    globalStore.dispatch({
      type: CHANGE_TEMP_SCALE,
    })
    return ;
  }

  /* renderSpinner() {
    if (this.state.isLoading) {
      console.log('spinner')
      return <img src={Spinner} alt="spinner" />;
    }
    return;
  }
 */

  render() {
    const cityProps = {
      daily: this.props.city.daily || [],
      cityName: this.props.city.cityName || '',
      hourly: this.props.city.hourly || [],
    }
    return (
      <div >
        <Header>
          {/* {this.renderSpinner()} */}
          <button
            className="bg-blue h-10 my-2 py-2 px-4 hover:bg-blue-dark text-white font-bold rounded"
            onClick={this.handleTempScale}>
            C/F
          </button>
        </Header>
        <PageView
          {...cityProps}
          />
        {/* <Footer /> */}
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    city: store.currentCity,
    tempInCelsius: store.tempInCelsius
  }
}
export default connect(mapStateToProps)(App);
