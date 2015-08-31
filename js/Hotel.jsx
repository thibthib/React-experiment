import '../css/Hotel.css';

import React from 'react';
import Weekend from './Weekend';

export default class Hotel extends React.Component {
  render() {
    return (
      <div className="Hotel">
        <h2 className="Hotel-name">{this.props.label}</h2>
        <span className="Hotel-address">{this.props.location.address}</span>
        <span className="Hotel-review">{this.props.review ? this.props.review.average : ''}</span>
        <div className="Hotel-weekends">
          {this.props.weekend.map(weekend => <Weekend {...weekend} />)}
        </div>
      </div>
    );
  }
};