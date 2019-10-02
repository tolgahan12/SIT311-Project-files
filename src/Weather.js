import React, {Component} from 'react';
import ReactWeather from 'react-open-weather';
import {MapTo} from '@adobe/cq-react-editable-components';
 
require('./Weather.css');
 
const WeatherEditConfig = {
 
    emptyLabel: 'Weather',
 
    isEmpty: function() {
        return !this.props || !this.props.cq_model || !this.props.cq_model.city || this.props.cq_model.city.trim().length < 1;
    }
};
 
class Weather extends Component {
 
    render() {
        let apiKey = "1e5bf80b44f37417412502bbaf290042";
        let city;
 
        if (this.props.cq_model) {
            city = this.props.cq_model.city;
            return <ReactWeather key={'react-weather' + Date.now()} forecast="today" apikey={apiKey} type="city" city={city} />
        }

        return null;
    }
}
 
MapTo('we-retail-journal/global/components/weather')(Weather, WeatherEditConfig);