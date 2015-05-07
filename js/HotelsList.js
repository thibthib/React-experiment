var HotelsList = React.createClass({
  loadHotels: function() {
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
    }

    request.open("GET", this.props.url, true);
    request.send();
  },

  getInitialState: function() {
    return { hotels: [] };
  },

  componentDidMount: function() {
    this.loadHotels();
  },

  render: function() {
    var hotelsNodes = this.state.hotels.map(function (hotel) {
      return (
        <h2 className="Hotel-title">{hotel.label}</h2>
      );
    });
    return (
      <div className="HotelsList">
        <h1 className="HotelsList-title">Hello ! I am a listing {this.state.hotels.length} hotels.</h1>
        {hotelsNodes}
      </div>
    );
  }
});

React.render(
  <HotelsList url="http://hotels.thibaut.io"/>,
  document.getElementById('hotelsList')
);
