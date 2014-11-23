angular.module('mysite').controller('profile',function ($scope){
	$scope.toggleTimeLine = function(con,btn){
		toggle(jQuery('.'+con),jQuery('#'+btn));
	};

	function toggle($container,$button){
		if($container.hasClass('collapsed')){
			$container.removeClass('collapsed').slideDown(800);
			$button.text('hide timleine');
			$('html,body').animate({scrollTop:"510px"},1000,'swing',function(){
				$(".tWrapper:eq(1) .perspectiveTile.right").hover();
			});
		} else {
			$container.addClass('collapsed').slideUp(800);
			$button.text('show timleine');
		}
	}
});