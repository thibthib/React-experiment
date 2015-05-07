var Hotel = React.createClass({
  render: function() {
    return (
      <div className="Hotel">
        <h2 className="Hotel-name">{this.props.label}</h2>
        <span className="Hotel-address">{this.props.address}</span><span className="Hotel-review">{this.props.review}</span>
      </div>
    );
  }
});
