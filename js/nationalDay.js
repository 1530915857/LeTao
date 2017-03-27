var ydxlul=document.getElementsByClassName("ydxl")[0];
var req=new XMLHttpRequest;
req.open("get","json/photo_infor.json",true);
req.send();
req.onreadystatechange=function()
{
	if (req.readyState == 4 && req.status == 200)
	{
		var list = JSON.parse(req.responseText);
		if (list.length>1)
		{
			var html="";
			for (var i in list) 
			{
				var src="img/"+list[i]["src"];
				var name=list[i]["pho_name"];
				var original=list[i]["original"];
				var discount=list[i]["discount"];
				var Href=list[i]["Href"];
				html+="<li><img src='"+src+"'/>"+"<a href='"+Href+"'>"+name+"</a>"+"<br><span class='tex_original'>专柜价：<span class='original'>"+original+"</span></span><br><span class='tex_discount'>乐淘价：<span class='discount'>"+discount+"</span></span>"+"<a href='"+Href+"'>"+"<span class='buy_now'>立即购买</span></a></li>";
			}
			ydxlul.innerHTML=html;
		}
	}
}
