import React from 'react';
import Hotel from './Hotel.jsx';
import '../css/HotelsList.css';

export default class HotelsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hotels: [] };
  }
  loadHotels() {
    var hotelsList = this;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        if(request.status == 200){
          hotelsList.setState({ hotels: JSON.parse(request.responseText).exactMatch });
        } else {
          console.error(hotelsList.props.url, request.status);
        }
      }
    };
    request.open("GET", this.props.url, true);
    request.send();
  }
  componentDidMount() {
    this.loadHotels();
  }
  render() {
    return (
      <div className="HotelsList">
        <h1 className="HotelsList-title">
          Hello ! I am listing {this.state.hotels.length} hotels and their weekends using React.js.
        </h1>
        { this.state.hotels.map((hotel) => <Hotel {...hotel} />) }
      </div>
    );
  }
};
