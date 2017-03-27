var account=document.getElementById("u_name");
var pwd=document.getElementById("pwq");
var qrmm=document.getElementById("qrmm");
var miss1=document.getElementById("acount_name");
var miss2=document.getElementById("pass");
var miss3=document.getElementById("arrifrm_pass");
var regis=document.getElementById("regis");
account.onblur=function()//验证用户名
{
	var usern=account.value;
	if (usern.length>6&&usern.length<32)//判断长度
	{
		 var regphot = /^1[3-578][0-9]{9}$/g;
         var regemail = /^\w+@[\da-z]+\..+$/g;
		if (regphot.test(usern)||regemail.test(usern))
		{
			miss1.style.display="block";
			miss1.style.backgroundColor='green';
			miss1.innerHTML="√";
			document.getElementById("acount_name_hint").innerHTML="";
	   }
		else
		{
			miss1.style.display="block";
			miss1.style.backgroundColor='red';
			miss1.innerHTML="×";
			document.getElementById("acount_name_hint").innerHTML="请输入正确的手机号或邮箱地址";
		}
	}
	else
	{
		miss1.style.display="block";
		miss1.style.backgroundColor='red';
		miss1.innerHTML="×";
		document.getElementById("acount_name_hint").innerHTML="用户名的长度应在6~32位之间";
	}
}	
pwd.onblur=function()//验证密码
{
	var passw=pwd.value;
	if (passw.length>6&&passw.length<32)
	{
		miss2.style.display="block";
		miss2.style.backgroundColor='green';
		miss2.innerHTML="√";
		document.getElementById("pass_hint").innerHTML="";
	} 
	else
	{
		miss2.style.display="block";
		miss2.style.backgroundColor='red';
		miss2.innerHTML="×";
		document.getElementById("pass_hint").innerHTML="密码的长度应在6~25位之间";
	}
}
qrmm.onblur=function()//确认密码
{
	var usern=account.value;
	var twomm=qrmm.value;
	var passw=pwd.value;
	if (twomm.length!=0)
	{
		if (twomm.length>6&&twomm.length<32) 
		{
			if(twomm===passw)
			{
				miss3.style.display="block";
			    miss3.style.backgroundColor='green';
			    miss3.innerHTML="√";
			    document.getElementById("arrifrm_hint").innerHTML="";
			    regis.onclick=function()
			    {
			    	if (getCookie("userName_"+usern)) {
			    		alert("该用户名已存在");
			    	} else{
			    		setCookie("userName_"+usern,usern,7);
			    		setCookie("pwd_"+usern,twomm,7);
			    	}
			    }
			}
			else
			{
				miss3.style.display="block";
				miss3.style.backgroundColor='red';
				miss3.innerHTML="×";
				document.getElementById("arrifrm_hint").innerHTML="两次输入密码不一致，请重新输入！";
			}
			
		} 
		else
		{
			miss3.style.display="block";
			miss3.style.backgroundColor='red';
			miss3.innerHTML="×";
			document.getElementById("arrifrm_hint").innerHTML="密码的长度应在6~25位之间";
		}
		
	} 
	else
	{
		miss3.style.display="block";
		miss3.style.backgroundColor='red';
		miss3.innerHTML="×";
		document.getElementById("arrifrm_hint").innerHTML="密码的长度应在6~25位之间";
	}
}
