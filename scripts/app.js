
var mysiteapp = angular.module('mysite',['ngRoute','ngAnimate']);
mysiteapp.config(['$routeProvider','$provide', '$httpProvider',function($routeProvider,$provide, $httpProvider){

	$routeProvider
	.when('/',{
		templateUrl:'views/profile.html',
		controller:'profile'
	})
	.when('/skills',{
		templateUrl:'views/skills.html',
		controller:'skills'
	})
	.when('/resume',{
		templateUrl:'views/resume.html',
		controller:'resume'
	})
	.when('/contact',{
		templateUrl:'views/contact.html',
		controller:'contact'
	})
	.otherwise({
		redirectTo:'/'
	});

	$httpProvider.interceptors.push(function() {
    return {
     'request': function(config) {
         var url = '../'+config.url;
         config.url = url;
         return config;
      }
    };
  });
}]);