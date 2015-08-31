import "../css/Hotel.css";

import React from 'react';
import Weekend from './Weekend';

export class Hotel extends React.Component {
  render() {
    return (
      <div className="Hotel">
        <h2 className="Hotel-name">{this.props.data.label}</h2>
        <span className="Hotel-address">{this.props.data.location.address}</span>
        <span className="Hotel-review">{this.props.data.review ? this.props.data.review.average : ''}</span>
        <div className="Hotel-weekends">
          {this.props.data.weekend.map(weekend => <Weekend {...weekend} />)}
        </div>
      </div>
    );
  }
};