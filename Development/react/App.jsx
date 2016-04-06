var React = require('react');
var ReactDOM = require('react-dom');
global.jQuery = require('jquery');
var bootstrap = require('bootstrap');
var ga = require('./services/gatracking.jsx');

var Routes = require('./Routes.jsx');
ReactDOM.render(Routes, document.getElementById('app'));