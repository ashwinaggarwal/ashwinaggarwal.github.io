'use strict';

angular.module('mysite')
.factory('PostEmail',['$q','$http',
	function($q,$http){
		var Post = function(msg){
			var d=$q.defer();
			jQuery.ajax({
				type:'POST',
				url: "https://mandrillapp.com/api/1.0/messages/send.json",
				data:{
					"key": "Te5iFbky9JzqmpMtjj3W0g",
					"message": {
						"text": msg.message,
						"subject": msg.subject,
						"from_email": msg.sender.email,
						"from_name": msg.sender.name,
						"to": [{
							"email": "ashwinaggarwal7@gmail.com",
							"name": "Ashwin Aggarwal",
							"type": "to"
						}],
						"headers": {
							"Reply-To": msg.sender.email
						}
					}
				}
			})
			.success(function(data){
				d.resolve(data);
			})
			.error(function(reason){
				d.reject(reason);
			});
			return d.promise;
		};
		return{post:Post};
	}])
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
.controller('contact',function($scope,PostEmail){
	$scope.msg = {};
	$scope.msg.subject = "Message from ashwinaggarwal.github.io";
	$scope.toggleList = function(){
		toggle($('ul.options'));
	};

	$scope.updateTrigger = function(value){
		$('#subject option[value ="' + value +'"]').prop('selected','selected');
		$('.trigger').text(value);
		$scope.msg.subject = value;
	};

	function toggle(element){
		if(element.hasClass('hide')){
			element.removeClass('hide');
			element.addClass('show');
		} else{
			element.removeClass('show');
			element.addClass('hide');
		}
	};

	$scope.sendmail = function(){
		var $submitBtn = jQuery('button.btnSend');
		var $contentDiv = $submitBtn.find('.content');
		var $loader = $submitBtn.find('.submitLoader');
		$contentDiv.addClass('hide');
		$loader.addClass('show');
		var promise= PostEmail.post($scope.msg);
	
		promise.then(function(data){
			$contentDiv.removeClass('hide').text('Message Sent');;
			$loader.removeClass('show');
		},function(reason){
			$contentDiv.removeClass('hide').text('Error! Try Again.');;
			$loader.removeClass('show');
		});
	};
});
