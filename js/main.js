'use strict';

angular.module('mysite')
.directive('toggleDropDowns',['$document','$window',function($document,$window){
	return{
		restrict:'C',
		link:function(scope,element,attrs){
			$document.on('click',function(event){
				if(element.hasClass('show')){
					element.addClass('hide');
					element.removeClass('show');
				}
			});

		}
	}
}])
.controller('about',function($scope){
})
.controller('profile',function($scope){
})
.controller('skills',function($scope){
})
.controller('resume',function($scope){
})
.controller('contact',function($scope){
	$scope.toggleList = function(){
		toggle($('ul.options'));
	};

	$scope.updateTrigger = function(value){
		$('#subject option[value ="' + value +'"]').prop('selected','selected');
		$('.trigger').text(value);
	};

	function toggle(element){
		if(element.hasClass('hide')){
			element.removeClass('hide');
			element.addClass('show');
		} else{
			element.removeClass('show');
			element.addClass('hide');
		}
	}
});
	