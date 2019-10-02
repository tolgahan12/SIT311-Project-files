import React from 'react';
import PropTypes from 'prop-types';

class WeatherInfoComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.weather != null &&
                    <div>   
                        <tr>
                            <th>Temperature</th>
                            <th>{(this.props.weather.main.temp - 273).toFixed(2)} Degree</th>
                        </tr>

                        <tr>
                            <th>Wind</th>
                            <th>{(this.props.weather.wind.speed - 273).toFixed(2)}</th>
                        </tr>

                        <tr>
                            <th>Cloudness</th>
                            <th>{(this.props.weather.dt )}</th>
                        </tr>

                        <tr>
                            <th>Pressure</th>
                            <th>{(this.props.weather.main.pressure - 273)} hpa</th>
                        </tr>

                        <tr>
                            <th>Humidity</th>
                            <th>{(this.props.weather.main.humidity - 273)} %</th>
                        </tr>

                        <tr>
                            <th>Sunrise</th>
                            <th>{(this.props.weather.sys.sunrise )}</th>
                        </tr>

                        <tr>
                            <th>Sunset</th>
                            <th>{(this.props.weather.sys.sunset )}</th>
                        </tr>

                    </div>
                }
            </React.Fragment>
        )
    }
}
WeatherInfoComponent.propTypes = {
    weather: PropTypes.object,
}

export default WeatherInfoComponent;