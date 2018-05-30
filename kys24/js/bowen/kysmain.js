window.onload=function(){
	var onav = document.getElementById('nav').getElementsByTagName('div');
	var ocol = document.getElementsByClassName('col');

	for (var i = 0; i < onav.length-1; i++) {
		onav[i].index=i;
		onav[i].addEventListener('mouseover',function(ev){
				ev = ev || window.event;
				ocol[this.index].style.display='block';
			});
		onav[i].addEventListener('mouseout',function(ev){
				ev = ev || window.event;
				ocol[this.index].style.display='none';
			});
		ocol[i].addEventListener('mouseover',function(ev){
				ev = ev || window.event;
				this.style.display='block';
			});
		ocol[i].addEventListener('mouseout',function(ev){
				ev = ev || window.event;
				this.style.display='none';
			});
	}
	function Lunbo(){
    var oImg = document.getElementById('cont').getElementsByTagName('img');
	var otab = document.getElementById('tab').getElementsByTagName('li');
	var oleft = document.getElementById('aleft');
	var oright = document.getElementById('aright');
	var index = 0;

	oImg[0].style.display = 'block';
	otab[0].className = 'on';
	
	var Timer=setInterval(function(){
				for (var i = 0; i < otab.length; i++) {
					otab[i].className='';
					oImg[i].style.display = 'none';
				}
				oImg[index].style.display = 'none';
				index = ++index == oImg.length ? 0 : index;
				otab[index].className = 'on';
				oImg[index].style.display = 'block';},2500)

	         oleft.onclick = function()
			{
				/*var a = document.querySelector('li[class="on"]').index;*/
				otab[index].className = "";
				oImg[index].style.display = "none";
				index--;
				if (index<0)
				{
					index=oImg.length-1;
				}
				otab[index].className = "on";
				oImg[index].style.display = "block";				
			};
			
			oright.onclick = function()
			{
				/*var a = document.querySelector('li[class="on"]').index;*/
				otab[index].className = "";
				oImg[index].style.display = "none";
				index++;
				if (index>oImg.length-1)
				{
					index=0;
				}
				otab[index].className = "on";
				oImg[index].style.display = "block";				
			};
		}
		Lunbo()
		function onload(){
			var pageSize=4;
			var pageNumber=1;
			//品牌
			$.ajax({  
		            type: "GET", //用GET方式传输  
		            dataType: "json", //数据格式:JSON  
		            url: 'http://duolaimon.cn/shop/brands', //目标地址  
		            data: "pageSize="+pageSize+"&pageNumber="+pageNumber,  
		            error: function (XMLHttpRequest, textStatus, errorThrown) { },  
		            success: function (redata){ 
		            	console.log(redata);
		            	for (var i = 0; i < $(".branch_con_item").length; i++) {
		            		$(".branch_con_item").eq(i).css({
		            			'background':'url(http://duolaimon.cn'+redata.dataList[i].brandPicture+')',
		            			'background-size':'100% 100%'
		            		})
		            	}
		            }  
		        }); 
			//禽类
		         $.ajax({  
		            type: "GET", //用GET方式传输  
		            dataType: "json", //数据格式:JSON  
		            url: 'http://duolaimon.cn/shop/commodities', //目标地址  
		            data: "pageSize="+10+"&pageNumber="+1,  
		            error: function (XMLHttpRequest, textStatus, errorThrown) { },  
		            success: function (redata){ 
		            	console.log(redata);

		            	for (var i = 0; i < $(".item1").length; i++) {
		            		
		            		console.log(i);
		            		/*$(".item1").attr('background','url('+redata.dataList[i].commodityPicture+')');*/
		            		console.log(redata.dataList[i].commodityPicture)
		            		console.log(redata.dataList[i].commodityName);
		            		$(".item1").eq(i).css({
		            			'background':'url(http://duolaimon.cn'+redata.dataList[i].commodityPicture+')',
		            			'background-size':'100% 100%'
		            		})
		            		$(".item1").eq(i).find( '.mark p a').html(redata.dataList[i].commodityName);
		            		$(".item1").eq(i).find( '.mark span').html('￥'+redata.dataList[i].commodityPrice);
		            		$(".item1").eq(i).find( '.mark p a').attr('href', './bowei/index.html?id='+redata.dataList[i].commodityID);
		            	}
		            }  
		        }); 
		         //畜类
		         $.ajax({  
		            type: "GET", //用GET方式传输  
		            dataType: "json", //数据格式:JSON  
		            url: 'http://duolaimon.cn/shop/commodities', //目标地址  
		            data: "pageSize="+10+"&pageNumber="+1,  
		            error: function (XMLHttpRequest, textStatus, errorThrown) { },  
		            success: function (redata){ 
		            	console.log(redata);

		            	for (var i = 0; i < $(".item2").length; i++) {
		            		
		            		console.log(i);
		            		/*$(".item1").attr('background','url('+redata.dataList[i].commodityPicture+')');*/
		            		console.log(redata.dataList[i].commodityPicture)
		            		console.log(redata.dataList[i].commodityName);
		            		$(".item2").eq(i).css({
		            			'background':'url(http://duolaimon.cn'+redata.dataList[i].commodityPicture+')',
		            			'background-size':'100% 100%'
		            		})
		            		$(".item2").eq(i).find( '.mark p a').html(redata.dataList[i].commodityName);
		            		$(".item2").eq(i).find( '.mark span').html('￥'+redata.dataList[i].commodityPrice);
		            		$('.item2').eq(i).find( '.mark p a').attr('href', './bowei/index.html?id='+redata.dataList[i].commodityID);
		            	}
		            }  
		        });
		         //水产
		         $.ajax({  
		            type: "GET", //用GET方式传输  
		            dataType: "json", //数据格式:JSON  
		            url: 'http://duolaimon.cn/shop/commodities', //目标地址  
		            data: "pageSize="+10+"&pageNumber="+1,  
		            error: function (XMLHttpRequest, textStatus, errorThrown) { },  
		            success: function (redata){ 
		            	console.log(redata);

		            	for (var i = 0; i < $(".item3").length; i++) {
		            		
		            		console.log(i);
		            		/*$(".item1").attr('background','url('+redata.dataList[i].commodityPicture+')');*/
		            		console.log(redata.dataList[i].commodityPicture)
		            		console.log(redata.dataList[i].commodityName);
		            		$(".item3").eq(i).css({
		            			'background':'url(http://duolaimon.cn'+redata.dataList[i].commodityPicture+')',
		            			'background-size':'100% 100%'
		            		})
		            		$(".item3").eq(i).find( '.mark p a').html(redata.dataList[i].commodityName);
		            		$(".item3").eq(i).find( '.mark span').html('￥'+redata.dataList[i].commodityPrice);
		            		$('.item3').eq(i).find( '.mark p a').attr('href', './bowei/index.html?id='+redata.dataList[i].commodityID);
		            	}
		            }  
		        });
		         //速冻
		         $.ajax({  
		            type: "GET", //用GET方式传输  
		            dataType: "json", //数据格式:JSON  
		            url: 'http://duolaimon.cn/shop/commodities', //目标地址  
		            data: "pageSize="+10+"&pageNumber="+1,  
		            error: function (XMLHttpRequest, textStatus, errorThrown) { },  
		            success: function (redata){ 
		            	console.log(redata);

		            	for (var i = 0; i < $(".item4").length; i++) {
		            		
		            		console.log(i);
		            		/*$(".item1").attr('background','url('+redata.dataList[i].commodityPicture+')');*/
		            		console.log(redata.dataList[i].commodityPicture)
		            		console.log(redata.dataList[i].commodityName);
		            		$(".item4").eq(i).css({
		            			'background':'url(http://duolaimon.cn'+redata.dataList[i].commodityPicture+')',
		            			'background-size':'100% 100%'
		            		})
		            		$(".item4").eq(i).find( '.mark p a').html(redata.dataList[i].commodityName);
		            		$(".item4").eq(i).find( '.mark span').html('￥'+redata.dataList[i].commodityPrice);
		            		$('.item4').eq(i).find( '.mark p a').attr('href', './bowei/index.html?id='+redata.dataList[i].commodityID);
		            	}
		            }  
		        });
		         //绿色
		         $.ajax({  
		            type: "GET", //用GET方式传输  
		            dataType: "json", //数据格式:JSON  
		            url: 'http://duolaimon.cn/shop/commodities', //目标地址  
		            data: "pageSize="+10+"&pageNumber="+1,  
		            error: function (XMLHttpRequest, textStatus, errorThrown) { },  
		            success: function (redata){ 
		            	console.log(redata);

		            	for (var i = 0; i < $(".item5").length; i++) {
		            		
		            		console.log(i);
		            		/*$(".item1").attr('background','url('+redata.dataList[i].commodityPicture+')');*/
		            		console.log(redata.dataList[i].commodityPicture)
		            		console.log(redata.dataList[i].commodityName);
		            		$(".item5").eq(i).css({
		            			'background':'url(http://duolaimon.cn'+redata.dataList[i].commodityPicture+')',
		            			'background-size':'100% 100%'
		            		})
		            		$(".item5").eq(i).find( '.mark p a').html(redata.dataList[i].commodityName);
		            		$(".item5").eq(i).find( '.mark span').html('￥'+redata.dataList[i].commodityPrice);
		            		$('.item5').eq(i).find( '.mark p a').attr('href', './bowei/index.html?id='+redata.dataList[i].commodityID);
		            	}
		            }  
		        });
		}
		onload();
}