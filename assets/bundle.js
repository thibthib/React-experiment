/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var React = __webpack_require__(2);
	var Hotel = __webpack_require__(3);

	var HotelsList = React.createClass({displayName: "HotelsList",
	  loadHotels: function() {
	    var hotelsList = this;
	    var request = new XMLHttpRequest();
	    request.onreadystatechange = function() {
	      if (request.readyState == 4) {
	        if(request.status == 200){
	          hotelsList.setState({ hotels: JSON.parse(request.responseText).exactMatch });
	        } else {
	          console.error(hotelsList.props.url, request.status);
	        }
	      }
	    };
	    request.open("GET", this.props.url, true);
	    request.send();
	  },
	  getInitialState: function() {
	    return { hotels: [] };
	  },
	  componentDidMount: function() {
	    this.loadHotels();
	  },
	  render: function() {
	    var createHotel = function (hotel) {
	      return React.createElement(Hotel, {data: hotel});
	    };

	    return (
	      React.createElement("div", {className: "HotelsList"}, 
	        React.createElement("h1", {className: "HotelsList-title"}, "Hello ! I am listing ", this.state.hotels.length, " hotels and their weekends using React.js."), 
	         this.state.hotels.map(createHotel)
	      )
	    );
	  }
	});

	React.render(
	  React.createElement(HotelsList, {url: "http://api.weekendesk.com/api/weekends.json?orderBy=priceQuality&locale=fr_FR&limit=50&page=0"}),
	  document.getElementById('hotelsList')
	);


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var React = __webpack_require__(2);
	var Weekend = __webpack_require__(4);

	var Hotel = React.createClass({displayName: "Hotel",
	  render: function() {
	    var createWeekend = function(weekend, index) {
	      return React.createElement(Weekend, {data: weekend})
	    };
	    
	    return (
	      React.createElement("div", {className: "Hotel"}, 
	        React.createElement("h2", {className: "Hotel-name"}, this.props.data.label), 
	        React.createElement("span", {className: "Hotel-address"}, this.props.data.location.address), 
	        React.createElement("span", {className: "Hotel-review"}, this.props.data.review ? this.props.data.review.average : ''), 
	        React.createElement("div", {className: "Hotel-weekends"}, this.props.data.weekend.map(createWeekend))
	      )
	    );
	  }
	});

	module.exports = Hotel;

/***/ },
/* 4 */
/***/ function(module, exports) {

	/** @jsx React.DOM */var Weekend = React.createClass({displayName: "Weekend",
	  getInitialState: function() {
	    return { selected: false };
	  },
	  onClick: function() {
	    this.setState({ selected: !this.state.selected });
	  },
	  render: function() {
	    var createTheme = function(theme, index) {
	      return React.createElement("span", {className: "Weekend-theme"}, theme);
	    };
	  
	    return (
	      React.createElement("div", {className:  'Weekend' + (this.state.selected ? ' is-selected' : ''), onClick: this.onClick}, 
	        React.createElement("img", {className: "Weekend-image", src: this.props.data.imageUrl}), 
	        React.createElement("div", {className: "Weekend-infos"}, 
	          React.createElement("div", {className: "Weekend-label"}, this.props.data.label), 
	          React.createElement("div", {className: "Weekend-themes"}, this.props.data.topTheme && this.props.data.topTheme.map(createTheme))
	        )
	      )
	    );
	  }
	});

	module.exports = Weekend;


/***/ }
/******/ ]);