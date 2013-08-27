
angular.module('contestServices', ['ngResource'])
    .factory('Contest', function($resource){
  		return $resource('/api/contest/contests', {}, {
    	query: {method:'GET', isArray:true} })
    })
  	.factory('contest_types', function($resource){
  		return $resource('/api/contest/contest_types', {}, {
    	query: {method:'GET', isArray:true}})
  	})
  	.factory('contest_phases', function($resource){
  		return $resource('/api/contest/contest_phases', {}, {
    	query: {method:'GET', isArray:true}})
  	});

