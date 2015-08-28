var React = require('react');
var Weekend = require('./Weekend.jsx');

var Hotel = React.createClass({
  render: function() {
    var createWeekend = function(weekend, index) {
      return <Weekend data={weekend} />
    };
    
    return (
      <div className="Hotel">
        <h2 className="Hotel-name">{this.props.data.label}</h2>
        <span className="Hotel-address">{this.props.data.location.address}</span>
        <span className="Hotel-review">{this.props.data.review ? this.props.data.review.average : ''}</span>
        <div className="Hotel-weekends">{this.props.data.weekend.map(createWeekend)}</div>
      </div>
    );
  }
});

module.exports = Hotel;