import React, { Component } from 'react';


export default class GoogleMap extends Component {
    componentDidMount() {
        const myLatLng = {
            lat: this.props.lat ,
            lng: this.props.lon
        };

        const cityMap= new google.maps.Map( this.refs.map , {
            zoom : 12 ,
            center: myLatLng
        });
        const marker = new google.maps.Marker({
            position: myLatLng,
            map: cityMap,
            title: this.props.cityName
            
          });
    }

    render() {
        return (
            <div ref="map"></div>
        )
    }
}