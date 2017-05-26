'use strict';

require('./scss/base.scss');
const angular = require('angular');

angular.module('adventureApp', []);

//load the services
//load the map first because players depend on it
require('./service/map-service.js');
require('./service/player-service.js');

//load the component
require('./component/adventurer/adventurer.js');
