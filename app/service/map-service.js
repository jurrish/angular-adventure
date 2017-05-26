'use strict';

const angular = require('angular');

angular.module('adventureApp')
.service('mapService', () => {
  let map = {};

  let roomA = 'ROOM_A';
  let roomB = 'ROOM_B';
  let roomC = 'ROOM_C';
  let roomD = 'ROOM_D';

  map[roomA] = {
    east: roomB,
    south: roomC,
  };

  map[roomB] = {
    west: roomA,
    south: roomD,
  };

  map[roomC] = {
    north: roomA,
    east: roomD,
    //trick loop room
    south: roomC,
    west: roomC,
  };

  map[roomD] = {
    north: roomB,
    west: roomC,
  };
  return map;
});
