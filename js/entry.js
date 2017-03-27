var account=document.getElementById("username");
var pwd=document.getElementById("pwd")
var miss1=document.getElementsByClassName("miss1")[0];
var miss2=document.getElementsByClassName("miss2")[0];
var entrypage=document.getElementById("btn_entry");
account.onblur=function()
{
	var usern=account.value;
	if (usern.length>6&&usern.length<32)//判断长度
	{
		 var regphot = /^1[3-578][0-9]{9}$/g;
         var regemail = /^\w+@[\da-z]+\..+$/g;
		if (regphot.test(usern)||regemail.test(usern))
		{
			miss1.style.visibility="visible";
			miss1.style.backgroundColor='green';
			miss1.innerHTML="√";
			document.getElementById("usern_hint").innerHTML="";
			entrypage.onclick=function()//点击登录
			{
				if (getCookie("username_"+usern))
				{
					alert("登陆成功");
				} 
				else
				{
					alert("该用户名不存在");
				}
			}
	   }
		else
		{
			miss1.style.visibility="visible";
			miss1.style.backgroundColor='red';
			miss1.innerHTML="×";
			document.getElementById("usern_hint").innerHTML="请输入正确的手机号或邮箱地址";
		}
	}
	else
	{
		miss1.style.visibility="visible";
		miss1.style.backgroundColor='red';
		miss1.innerHTML="×";
		document.getElementById("usern_hint").innerHTML="用户名的长度应在6~32位之间";
	}
}	
pwd.onblur=function()
{
	var passw=pwd.value;
	if (passw.length>6&&passw.length<32)
	{
		miss2.style.visibility="visible";
		miss2.style.backgroundColor='green';
		miss2.innerHTML="√";
		document.getElementById("pwd_hint").innerHTML="";
	} 
	else
	{
		miss2.style.visibility="visible";
		miss2.style.backgroundColor='red';
		miss2.innerHTML="×";
		document.getElementById("pwd_hint").innerHTML="密码的长度应在6~25位之间";
	}
}
