"use strict";
$(function(){
	var aSeleb = $(".select-bar");
	
	for(var i=0;i<aSeleb.length;i++){

		$(aSeleb[i]).click(function(){
			if($(this).find('img[src*="down"]').length>0)
					var flag = 0
				else
					var flag = 1;
				
			if(flag == 0){
				$(this).find('img').attr('src','img/up.png');
				yichu();
				flag = 1;
			}else{
				flag = 0;
				$(this).find('img').attr('src','img/down.png');
				yichu();
			}
			// event.stopPropagation();
		});
			$(aSeleb[i]).mouseover(function(){
				if($(this).find('img[src*="down"]').length>0)
					$(this).find('img').attr('src','img/reddown.png')
				else
					$(this).find('img').attr('src','img/redup.png');
			});
			yichu();
			function yichu(){
				$(aSeleb[i]).mouseout(function(){
					if($(this).find('img[src*="down"]').length>0)
						$(this).find('img').attr("src","img/down.png")
					else
						$(this).find('img').attr("src","img/up.png");
				});
			}
			
	}
			
});