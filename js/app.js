
var mysiteapp = angular.module('mysite',['ngRoute','ngAnimate']);
mysiteapp.config(['$routeProvider','$provide', '$httpProvider',function($routeProvider,$provide, $httpProvider){

	$routeProvider
	.when('/',{
		templateUrl:'html/profile.html',
		controller:'profile'
	})
	.when('/skills',{
		templateUrl:'html/skills.html',
		controller:'skills'
	})
	.when('/resume',{
		templateUrl:'html/resume.html',
		controller:'resume'
	})
	.when('/contact',{
		templateUrl:'html/contact.html',
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