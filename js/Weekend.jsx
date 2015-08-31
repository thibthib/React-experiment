import React from 'react';
import '../css/Weekend.css';

export default class Weekend extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
  }
  onClick() {
    this.setState({ selected: !this.state.selected });
  }
  render() {
    return (
      <div className={ 'Weekend' + (this.state.selected ? ' is-selected' : '') } onClick={this.onClick.bind(this)}>
        <img className="Weekend-image" src={this.props.imageUrl}/>
        <div className="Weekend-infos">
          <div className="Weekend-label">{this.props.label}</div>
          <div className="Weekend-themes">
            {this.props.topTheme && this.props.topTheme.map(theme => <span className="Weekend-theme">{theme}</span>)}
          </div>
        </div>
      </div>
    );
  }
};