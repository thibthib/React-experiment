import React from 'react';
import HotelsList from './HotelsList.jsx';
import '../css/app.css';

React.render(
  <HotelsList url="http://api.weekendesk.com/api/weekends.json?orderBy=priceQuality&locale=fr_FR&limit=50&page=0"/>,
  document.getElementById('hotelsList')
);