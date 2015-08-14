var Hotel = React.createClass({
  render: function() {
    var weekendNodes = this.props.data.weekend.map(function (weekend) {
      return (
        <Weekend data={weekend} />
      );
    });
    return (
      <div className="Hotel">
        <h2 className="Hotel-name">{this.props.data.label}</h2>
        <span className="Hotel-address">{this.props.data.location.address}</span>
        <span className="Hotel-review">{this.props.data.review ? this.props.data.review.average : ''}</span>
        <div className="Hotel-weekends">{weekendNodes}</div>
      </div>
    );
  }
});
