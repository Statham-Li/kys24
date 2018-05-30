
$(function(){
	$(".haveitem").mouseover(function()/**/{
		console.log(1)
		$(".haveitem ul").css({"display":"block"});
	})
	$(".haveitem").mouseout(function(){
		console.log(2)
		$(".haveitem ul").css({"display":"none"});
	})
});