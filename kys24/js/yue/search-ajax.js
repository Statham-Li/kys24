$(function(){
	var oSearchBtn = $('#searchbtn');
	var iPage = 1;
	var num=0;
	var oFoot = $('#footer');
	var hotH = $('.hot:first').height();
$("#good-ul").ajaxStart(function(){
	$(".tishi").show();
});
$(".search").click(function(){
		$('.pinpai').html("<li class='pin'><p>品牌：</p></li><li class='all'>全部</li>");
	});
console.log(window.location.search);
	$("#search-form").submit(function(){
		$.ajax({
		url:"http://demoncirno.cn/kys24/pay/goods/"+$('#search').val(),
		type:"POST",
		dataType:'json',
		success:function(data){
			$('.tongji-search-value').html($('#search').val());
			$('#good-ul').html("");
			let num = 0;
			let oGUl = $('#good-ul');
			if(data.length == 0){
				$('#good-ul').html("未找到与此描述相关的项");
				$('.tongji-num').html(0);
			}else{
				chushi();
			}
			function chushi(){
				for(let i = 0;i<data.length;i++){
					let oGLi = $("<li></li>");
					oGUl.append(oGLi);
					let oDivGD = $("<div></div>");
					oDivGD.addClass("goods-div");
					oGLi.append(oDivGD);
					let oDivG = $("<div></div>");
					oDivG.addClass("goods"); 
					oDivGD.append(oDivG);
					let oGImg = $("<img src=''/>");
					oGImg.attr("src","http://demoncirno.cn/kys24"+data[i].commodityPicture);
					oGImg.addClass("goods-img");
					oDivG.append(oGImg);
					let oGP2 = $("<p></p>");
					oGP2.addClass("goods-title");
					oDivG.append(oGP2);
					oGP2.html(data[i].commodityName);
					let oGP1 = $("<p></p>");
					oGP1.addClass("goods-price");
					oDivG.append(oGP1);
					let oSpanG1 = $("<span>￥</span>");
					oGP1.append(oSpanG1);
					let oSpanG2 = $("<span></span>");
					oSpanG2.html(data[i].commodityPrice);
					oGP1.append(oSpanG2);	
					let oGPS = $("<p></p>");
					oGPS.addClass("goods-sale");
					oDivG.append(oGPS);
					let oSpanGS = $("<span>(已成交</span>");
					oGPS.append(oSpanGS);
					let oSpanGS2 = $("<span></span>");
					oSpanGS2.addClass("goods-sale-num");
					oSpanGS2.html(data[i].commodityAmount-data[i].commodityLeavenum);
					oGPS.append(oSpanGS2);
					let oSpanGSB = $("<span>笔)</span>");
					oGPS.append(oSpanGSB);
					num++;
				}
			}

			//footer
				/*$('.tongji-num').html(num);
				var marb = 150;
				var divn = parseInt($(window).width()/300);
				var cant = Math.ceil(data.length/divn)*(300+10)+oFoot.height()+30+30+marb;
				if(cant>hotH){
					oFoot.css("top",cant+"px");
				}*/

				//排序
				// function a(){
				// 	for(;j<arr.length;j++){
				// 			if(arr[i] === data[j].commodityPrice){
				// 				$("#good-ul li").eq(i).find(".goods-img").attr("src",data[j].commodityPicture);
				// 				$("#good-ul li").eq(i).find(".goods-price").html("￥"+data[j].commodityPrice);		
				// 				$("#good-ul li").eq(i).find(".goods-title").html(data[j].commodityName);
				// 				$("#good-ul li").eq(i).find(".goods-sale").html("已成交"+data[i].commodityAmount-data[i].commodityLeavenum+"笔");
				// 				flag = j;
				// 				break;
				// 			}
				// 		}
				// }
				// var aL = function b(){
				// 	for(;j<arr.length;j++){
				// 			if(arr[i] === data[j].commodityAmount-data[j].commodityLeavenum){
				// 				$("#good-ul li").eq(i).find(".goods-img").attr("src",data[j].commodityPicture);
				// 				$("#good-ul li").eq(i).find(".goods-price").html("￥"+data[j].commodityPrice);		
				// 				$("#good-ul li").eq(i).find(".goods-title").html(data[j].commodityName);
				// 				$("#good-ul li").eq(i).find(".goods-sale").html("已成交"+data[i].commodityAmount-data[i].commodityLeavenum+"笔");
				// 				flag = j;
				// 				break;
				// 			}
				// 		}
				// }
				var aSeleb = $(".select-bar");
				//排序函数调用
				function reduce(a,b){return a-b;}
				function rise(a,b){return b-a;}
				function paixu(pai){
					$("#good-ul li").each(function(){
							$(this).find(".goods-img").attr("src","");
							$(this).find(".price").html("");
							$(this).find(".goods-title").html("");
							$(this).find(".goods-sale-num").html("");

						});
					
					var arr = [];
					for(var i=0;i<num;i++){
						arr.push(data[i].commodityPrice);
					}
					
					arr.sort(pai);
					var j=0;
					var flag = 0;
					for(var i=0;i<arr.length;i++){
						for(var p = i-1;p>=0;p--){
							if(arr[i] === arr[p]){
								
								j = flag+1;
								break;
							}else{
								j=0;
								break;
							}
						}
						for(;j<arr.length;j++){
							if(arr[i] === data[j].commodityPrice){
								$("#good-ul li").eq(i).find(".goods-img").attr("src","http://demoncirno.cn/kys24"+data[j].commodityPicture);
								$("#good-ul li").eq(i).find(".goods-price").html("￥"+data[j].commodityPrice);		
								$("#good-ul li").eq(i).find(".goods-title").html(data[j].commodityName);
								$("#good-ul li").eq(i).find(".goods-sale-num").html(data[j].commodityAmount-data[j].commodityLeavenum);
								flag = j;
								break;
							}
						}
					}
				}
				
				function paixu2(pai){
					$("#good-ul li").each(function(){
							$(this).find(".goods-img").attr("src","");
							$(this).find(".goods-price").html("");
							$(this).find(".goods-title").html("");
							$(this).find(".goods-sale-num").html("");
						});
					
					var arr = [];
					for(var i=0;i<num;i++){
						arr.push(data[i].commodityLeavenum);
					}
					
					arr.sort(pai);
					var j=0;
					var flag = 0;
					for(var i=0;i<arr.length;i++){
						for(var p = i-1;p>=0;p--){
							if(arr[i] === arr[p]){
								
								j = flag+1;
								break;
							}else{
								j=0;
								break;
							}
						}
						for(;j<arr.length;j++){
							if(arr[i] === data[j].commodityLeavenum){
								$("#good-ul li").eq(i).find(".goods-img").attr("src","http://demoncirno.cn/kys24"+data[j].commodityPicture);
								$("#good-ul li").eq(i).find(".goods-price").html("￥"+data[j].commodityPrice);		
								$("#good-ul li").eq(i).find(".goods-title").html(data[j].commodityName);
								$("#good-ul li").eq(i).find(".goods-sale-num").html(data[j].commodityAmount-data[j].commodityLeavenum);
								flag = j;
								break;
							}
						}
					}
				}
				$(aSeleb[1]).click(function(){
					if($(this).find('img[src*="down"]').length>0)
						var flag = 0
					else
						var flag = 1;
					if(flag ==1)
						paixu(reduce);
					if(flag == 0)
						paixu(rise);	
				});
				$(aSeleb[0]).click(function(){
					if($(this).find('img[src*="down"]').length>0)
						var flag = 0
					else
						var flag = 1;
					if(flag ==1)
						paixu2(reduce);
					if(flag == 0)
						paixu2(rise);
				});
				//品牌
				$('.all').eq(0).click(function(){
						
						$('#good-ul').html("");
						chushi();
					});
				var arr2 = [];
				for(var i=0;i<data.length;i++){
					arr2.push(data[i].commodityBrand);
				}
				for(var i=0;i<data.length-1;i++){
				for(var j=i+1;j<data.length;j++){
					if(arr2[i] === arr2[j]){
						arr2[j]="";
					}
				}
				}
				function a(){
				for(var i=0;i<data.length;i++){
					if(arr2[i] === ""){
						arr2.splice(i,1);
						a();
					}
				}
				}
				a();
				for(var i = 0;i<arr2.length;i++){
					let oPLi = $("<li></li>");
					oPLi.addClass("all");
					$('.pinpai').append(oPLi);	
					oPLi.html(arr2[i]);

					$('.all').eq(i+1).click(function(){
						$('#good-ul').html("");
						for(var i=0;i<data.length;i++){
							if($(this).html() == data[i].commodityBrand){
							let oGLi = $("<li></li>");
							oGUl.append(oGLi);
							let oDivGD = $("<div></div>");
							oDivGD.addClass("goods-div");
							oGLi.append(oDivGD);
							let oDivG = $("<div></div>");
							oDivG.addClass("goods"); 
							oDivGD.append(oDivG);
							let oGImg = $("<img src=''/>");
							oGImg.attr("src",data[i].commodityPicture);
							oGImg.addClass("goods-img");
							oDivG.append(oGImg);
							let oGP1 = $("<p></p>");
							oGP1.addClass("goods-price");
							oDivG.append(oGP1);
							let oSpanG1 = $("<span>￥</span>");
							oGP1.append(oSpanG1);
							let oSpanG2 = $("<span></span>");
							oSpanG2.html(data[i].commodityPrice);
							oGP1.append(oSpanG2);
							let oGP2 = $("<p></p>");
							oGP2.addClass("goods-title");
							oDivG.append(oGP2);
							oGP2.html(data[i].commodityName);
							}
						}
					});
				}

		},
	
	});		
		return false;
	});
});
