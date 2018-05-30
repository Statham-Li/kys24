"use strict";	
$(function(){
	//处理窗口变小时自适应问题
	var winW = $(window).width();
	var conL = (winW-$("div.container").width())/2;
	// alert($(window).width());
	function Wid(blank){
		var conW = $("div.main").width()-blank;
		$("div.container").css({
			"width":conW+'px'
		});
	}
	Wid(220);

	$(window).resize(function(){
		if($(window).width()<winW-50){
		Wid(0,0);
		$(".hot").hide();
		}else{
			Wid(220);
		$(".hot").show();
		}	
	})
	var oUlW = $("div.container").width();
	$('#good-ul').css({"width":oUlW+'px'});
	//商品宽度
	//对商品排序之箭头
	var aSeleb = $(".select-bar");
	
	for(var i=0;i<aSeleb.length;i++){

		$(aSeleb[i]).click(function(){
			if($(this).find('img[src*="down"]').length>0)
					var flag = 0
				else
					var flag = 1;
				
			if(flag == 0){
				$(this).find('img').attr('src','../../image/up.png');
				yichu();
				flag = 1;
			}else{
				flag = 0;
				$(this).find('img').attr('src','../../image/down.png');
				yichu();
			}
			// event.stopPropagation();
		});
			$(aSeleb[i]).mouseover(function(){
				if($(this).find('img[src*="down"]').length>0)
					$(this).find('img').attr('src','../../image/reddown.png')
				else
					$(this).find('img').attr('src','../../image/redup.png');
			});
			yichu();
			function yichu(){
				$(aSeleb[i]).mouseout(function(){
					if($(this).find('img[src*="down"]').length>0)
						$(this).find('img').attr("src","../../image/down.png")
					else
						$(this).find('img').attr("src","../../image/up.png");
				});
			}
			
	}
			
});