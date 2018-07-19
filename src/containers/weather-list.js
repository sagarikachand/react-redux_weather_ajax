import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/sparkline-component';
import GoogleMap from '../components/google-map-component';


class WeatherList extends Component {
    renderWeather(cityData) {
        const name      = cityData.city.name;
        const temps     = _.map(cityData.list.map(row => row.main.temp), (temp) => temp - 273.15);
        const pressure  = cityData.list.map(row => row.main.pressure);
        const humidity  = cityData.list.map(row => row.main.humidity);
        //ES6 syntax :: grab cityData.city.coord.lat /lon and then assign them to two new const lat and lon 
        const { lat , lon }       = cityData.city.coord

        console.log(temps)
        return (
            <tr key={name}>
                <td>                    <GoogleMap lat={lat} lon={lon} cityName={name}/></td>
                <td>                    <Chart data={temps} color="orange" units="ºC" />                </td>
                <td>                    <Chart data={pressure} color="green" units="hPa" />                </td>
                <td>                    <Chart data={humidity} color="black" units="%" />               </td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City </th>
                        <th>Tempreture (ºC)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>

                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }


}



// function mapStateToProps(state){
//     return {weather : state.weather}
// }

function mapStateToProps({ weather }) {

    return { weather }
}


export default connect(mapStateToProps)(WeatherList)