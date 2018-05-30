var osub=$("#sub");
$("#updata_form").validate(); 
			var oSonInpt = document.getElementById('phone');//子页面
				var userPhone = window.opener.document.getElementById('phone').value;//父页面数据
				var newPassword=$("#password").val();
				var confine=$("#confine").val();
				//初始化
				function init (){
					oSonInpt.value=userPhone;
				}
				init();

		function update (){
							if(confine!=newPassword||(confine==""&&newPassword=="")){
											return false;
										}
										
								$.ajax({  
							            type: "POST", //用POST方式传输  
							            dataType: "json", //数据格式:JSON  
							            url: 'http:/demoncirno.cn/kys24/userController/update_1', //目标地址  
							            data: {
							            	userPhone:userPhone,
							            	newPassword:newPassword
							            },
							            error: function (XMLHttpRequest, textStatus, errorThrown) { 
							            	console.log(1)
							             }, 

							            success: function (msg){
							            	
							            	if(msg.upte=0){
							            		alert("修改失败")
							            	} 
							            	if (msg.upte=1){
							            		alert("修改成功")
							            	}
							            	if(msg.upte=-1){
							            		alert("用户不存在")
							            	}	
							            }  
							        });  
							}