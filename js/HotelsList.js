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
        <Hotel label={hotel.label} address={hotel.location.address} review={hotel.review.average}/>
      );
    });
    return (
      <div className="HotelsList">
        <h1 className="HotelsList-title">Hello ! I am listing {this.state.hotels.length} hotels.</h1>
        {hotelsNodes}
      </div>
    );
  }
});

React.render(
  <HotelsList url="http://api.weekendesk.com/api/weekends.json?orderBy=priceQuality&locale=fr_FR&limit=50&page=0"/>,
  document.getElementById('hotelsList')
);