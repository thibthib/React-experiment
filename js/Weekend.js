var Weekend = React.createClass({
  render: function() {
    var themesNodes;
    if (this.props.data.topTheme) {
      themesNodes = this.props.data.topTheme.map(function (theme) {
        return (
          <span className="Weekend-theme">{theme}</span>
        );
      });
    }
  
    return (
      <div className="Weekend">
        <img className="Weekend-image" src={this.props.data.imageUrl}/>
        <div className="Weekend-infos">
          <div className="Weekend-label">{this.props.data.label}</div>
          <div className="Weekend-themes">{themesNodes}</div>
        </div>
      </div>
    );
  }
});
