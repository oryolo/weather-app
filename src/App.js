import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import PageView from './components/PageView';
import './index.css';
import { connect } from 'react-redux';
import { FETCH_CITY_DATA, CHANGE_TEMP_SCALE } from './store/actions';
import globalStore from './store/global_store';
import Drawer from 'react-toolbox/lib/drawer';

class App extends Component {

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
    return;
  }

  getButton(tempInCelsius) {
    let buttonProps = {
      className: "bg-blue h-10 my-4 py-2 px-4 hover:bg-blue-dark text-white font-bold rounded",
      onClick: this.handleTempScale
    }
    return tempInCelsius ? <button {...buttonProps}>&#8451;</button> : <button {...buttonProps}>&#8457;</button>
  }

  render() {
    const cityProps = {
      daily: this.props.city.daily || [],
      cityName: this.props.city.cityName || '',
      hourly: this.props.city.hourly || [],
    }

    return (
      <React.Fragment>
        <Header>
          {this.getButton(this.props.tempInCelsius)}
        </Header>
        <PageView
          {...cityProps} />
        <Footer />
      </React.Fragment>
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
