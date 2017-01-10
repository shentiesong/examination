'use strict';

/**
 * @ngdoc overview
 * @name yeomanApp
 * @description
 * # yeomanApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanApp', ["ui.router"])
    .config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
  	$urlRouterProvider.when("","/login")
  	$stateProvider.state("login",{ 
       url:"/login", 
       templateUrl:'views/login.html', 
       controller:""
     })
  }])
