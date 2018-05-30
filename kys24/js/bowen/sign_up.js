		var InterValObj; //timer变量，控制时间  
		var count = 60; //间隔函数，1秒执行  
		var curCount;//当前剩余秒数 
		var osub=$("#sub");
		var omes=$("#message");
		window.redata="";
		$("#sign_up_form").validate();    
		function sendMessage() {  
		    curCount = count;
		    var inputval=$("#message").val();  
		    var phone=$("#phone").val();//手机号码  
		    if(phone != ""){   
		        //设置button效果，开始计时  
		        $("#btnSendCode").attr("disabled", "true");  
		        $("#btnSendCode").val("("+curCount + ")秒后重发");  
		        InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次  
		    //向后台发送处理数据  
		        $.ajax({  
		            type: "GET", //用GET方式传输  
		            dataType: "json", //数据格式:JSON  
		            url: 'http://demoncirno.cn/kys24/userController/message/'+phone, //目标地址  
		            data: "",  
		            error: function (XMLHttpRequest, textStatus, errorThrown) { },  
		            success: function (redata){ 
		            	console.log(redata);
		            	window.redata=redata.rg;
		            	console.log(window.redata);
		            }  
		        });  
		    }else{  
		        alert("手机号码不能为空！");  
		    }
		     
		}
		
		omes.blur(function(){
			var token=omes.val();
			if(token==window.redata&&token!=null){
				console.log(token);
				console.log(window.redata);
					$("#sub").removeAttr("disabled");//启用按钮 
							$("#sub").css({
							    'background':' rgb(143,195,31)',
							    'color':'#fff'
							})	
			}else{
				console.log(window.redata)
					$("#message").css({
							'color':'red'
					})
			}
							           
		})
		osub.click(function(){
		            		var userName=$("#username").val();
							var userPassword=$("#password").val();
							var userAddress=$("#address").val();
							var userPhone = $("#phone").val();
							var token=$("#message").val();
							var user = {
								"userName":userName,
								"userPassword":userPassword,
								"userAddress":userAddress,
								"userPhone":userPhone,
							}
							if(userName==""||userPassword==""||userAddress==""||userPhone==""||token==""){
								
								return false;
							}
														
							console.log(token);
							console.log(window.redata);
								$.ajax({  
							            type: "POST", //用POST方式传输  
							            dataType: "json", //数据格式:JSON  
							            url: 'http://demoncirno.cn/kys24/userController/register', //目标地址  
							            data:user,
							            error: function (XMLHttpRequest, textStatus, errorThrown) {
							            	console.log(1)
							            }, 
							            success: function (msg){
							            	console.log(msg.info);
							            	if(msg.info==1){
							            		alert("注册成功");
							            		
							            	}else if(msg.info==0){
							            		alert("注册失败");
							            		
							            	}else if (msg.info==-1) {
							            		alert("用户已经注册");
							            		
							            	}else if(msg.info==2){
							            		alert("验证码输入错误");
							            	}else{
							            		alert("请填写正确信息");
							            	}
							            }  
							        });  
							}) 
						
		//timer处理函数  
		function SetRemainTime() {  
		    if (curCount == 0) {                  
		        window.clearInterval(InterValObj);//停止计时器  
		        $("#btnSendCode").removeAttr("disabled");//启用按钮  
		        $("#btnSendCode").val("重新发送验证码");    
		    }  
		    else {  
		        curCount--;  
		        $("#btnSendCode").val("("+curCount + ")秒后重发");  
		    }  
		}
		
