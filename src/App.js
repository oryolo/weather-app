import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import PageView from './components/PageView';
import './index.css';
import { connect } from 'react-redux';
import { FETCH_CITY_DATA } from './store/actions';
import globalStore from './store/global_store';

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

  render() {
    const cityProps = {
      daily: this.props.city.daily || [],
      cityName: this.props.city.cityName || '',
      hourly: this.props.city.hourly || [],
    }

    return (
      <React.Fragment>
        <Header>
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
