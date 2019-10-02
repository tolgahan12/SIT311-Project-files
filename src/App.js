  
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./Home";
import WeatherInfoComponent from './WeatherInfoComponent.js';



class App extends Component {
     state= {
		 Weatherin:"Melbourne"
	 }
	handleChanges = (event) => {
		this.setState({ city: event.target.value })
	  }
	  getWeather = () => {	
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${'a3cd80feee254cf349083097ea4c3e7c'}`)
		  .then(response => response.json())
		  .then(data => {
			this.setState({ weather: data })
		  })
		  .catch(error => {
		  })
	  }

	render() {
		return (
        <div className="App">
				<div>
					<div> 
					{<WeatherInfoComponent weather={this.state.weather} />}
        </div>
          <p>
            <input id={"City"}
              type='text'
              value={this.state.city}
              onChange={this.handleChanges} />

          </p>
        <input type="button"
          onClick={this.getWeather}
					value={'Get Weather'} />
					</div>
		<div>
		<Router>
					<div>
						<Route exact path="/" component={Home} />
					</div>
		</Router>

			</div>
		</div>
		);
		 
	}	
	}

export default App;



