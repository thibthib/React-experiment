var HotelsList = React.createClass({
  render: function() {
    return (
      <h1 className="HotelsList-title">Hello ! I am a listing hotels.</h1>
    );
  }
});

React.render(
  <HotelsList/>,
  document.getElementById('hotelsList')
);
