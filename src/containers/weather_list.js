import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

    renderWeather(cityData) {
        console.log("renderWeather");
        return (
            <tr>
                <td>cityData.city.name</td>
            </tr>
        );

    }

    render() {
        console.info(this.props);
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

// Talar om att denna funktion ska ha en relation till State weather.
// function mapStateToProps({ weather }) {
//     return { weather }; // = {weather: weather}
// }

// Kopplar samman komponenten WeatherList med weather state i redux, när weather state ändras renderas WeatherList med det nya state.
// export default connect(mapStateToProps)(WeatherList);

function mapStateToProps({ weather }) {
    return { weather };
  }
  
  export default connect(mapStateToProps)(WeatherList);