function getCookie(keys)
{
	var str=document.cookie;
	var list=str.split(";");
	var temp="";
	for (var i=0;i<list.length;i++)
	{
		var cookie=list[i];
		var key=cookie.split("=")[0].replace(" ","");
		var value=cookie.split("=")[1];
		if (key==keys)
		{
			temp=value;
		}
	}
	return temp;
}
function setCookie(key,value,day)
{
	var date=new Date();
	date.setDate(date.getDate()+day);
	document.cookie=key+"="+value+";expires="+date;
}