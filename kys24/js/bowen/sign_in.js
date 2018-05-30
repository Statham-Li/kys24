$(function(){
	
	var obtn=$("#sub");
			
	obtn.click(function(){
		var userPhone=$("#userPhone").val();
		var userPassword=$("#password").val();
		$.ajax({  
			type: "POST", //用POST方式传输  
			dataType: "json", //数据格式:JSON  
		    url: 'http://demoncirno.cn/kys24/userController/login', //目标地址  
		    data: {userPhone:userPhone,
		    	   userPassword:userPassword
		    },
		    error: function (XMLHttpRequest, textStatus, errorThrown) {
		   
		 		alert("请求不成功");
		    },  
		    success: function (msg){ 
		    	/*msg = JSON.parse(msg)*/
		    	if(msg.info==1){
		    		alert("登录成功");
		    	}
		    	if(msg.info==0){
		    		alert("用户不存在");
		    	}
		    	if(msg.info==-1){
		    		alert("密码错误");
		    	}
		     	
		     	console.log(msg.info);
		    }  
		}); 
	}) 
})