'use strict';

const angular = require('angular');

angular.module('adventureApp')
//create service
.service('playerService',['mapService'], function(mapService){
  //create a player object and attach properties
  let player = {};

  player.name = 'slug',
  //this is a reference to where the player is on the map
  //north, south, east, west + weird troll of room c
  //default location => access the room property in mapService
  player.location = mapService.roomA;

  player.move = function(direction){
    let nextLocation = player.location[direction]; //returns 'roomB';
    if(nextLocation) {
      console.log(player.location, 'player.location[direction]');
      player.location = mapService[nextLocation];
      console.log('player is not in ', player.location);
      return;
    }
    console.log('player hit a wall');
  };

  return player;
});
