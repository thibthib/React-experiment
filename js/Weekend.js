var Weekend = React.createClass({
  getInitialState: function() {
    return { selected: false };
  },
  onClick: function() {
    this.setState({ selected: !this.state.selected });
  },
  render: function() {
    var createTheme = function(theme, index) {
      return <span className="Weekend-theme">{theme}</span>;
    };
  
    return (
      <div className={ 'Weekend' + (this.state.selected ? ' is-selected' : '') } onClick={this.onClick}>
        <img className="Weekend-image" src={this.props.data.imageUrl}/>
        <div className="Weekend-infos">
          <div className="Weekend-label">{this.props.data.label}</div>
          <div className="Weekend-themes">{this.props.data.topTheme && this.props.data.topTheme.map(createTheme)}</div>
        </div>
      </div>
    );
  }
});
