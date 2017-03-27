var id=location.href.split("?")[1].split("=")[1];//获取json文件内容
var goods_photo=document.getElementById("goods_photo");
var smallimg=goods_photo.getElementsByTagName("img")[0];
var original=document.getElementsByClassName("original")[0];
var discount=document.getElementsByClassName("discount")[0];
var save_money=document.getElementsByClassName("save_money")[0];
var h2=document.getElementsByTagName("h2")[0];
var big=document.getElementById("reading_glass");
var bigimg=big.getElementsByTagName("img")[0];
var req=new XMLHttpRequest();
req.open("get","json/photo_infor.json",true);
req.send();
req.onreadystatechange=function()
{
	if (req.readyState==4&&req.status==200)
	{
		var list=JSON.parse(req.responseText);
		for (var i in list)
		{
			var no=list[i]["id"];
			if (no==id)
			{
				h2.innerHTML=list[i]["pho_name"];
				$("title").html(h2.innerHTML+" _正品_价格_打折_尺码对照表_乐淘网");
				smallimg.src="img/"+list[i]["small"];
				original.innerHTML=list[i]["original"];
				discount.innerHTML=list[i]["discount"];
				bigimg.src="img/"+list[i]["bigphoto"];
				ori=list[i]["original"].split("￥")[1];
				dis=list[i]["discount"].split("￥")[1];
				save_money.innerHTML=ori-dis;
//				var longer=list[i]["bigphotolist"].length;
//				var bigphotoul=$("#goods_small_photo ul");
//				var cout="";
//				for (var j in list[i]["bigphotolist"])
//				{
//					var bigphlist="img/"+list[i]["bigphotolist"][j];
//					cout+="<li><img src='"+bigphlist+"'/></li>"
//				}
//				$("#goods_small_photo ul").html(cout);
			}
		}
	}
}
$("#goods_photo").mouseover(function(){//放大镜
	$("#shard").css("display","block");
	$("#reading_glass").css("display","block");
}).mouseout(function()
	{
		$("#shard").css("display","none");
		$("#reading_glass").css("display","none");
	});
$("#goods_photo").mousemove(function(e)
{
	$("#shard").css("cursor","crosshair");
	var $pagex=e.clientX;//获取鼠标的位置
	var $pagey=e.clientY;	
	var redx = $pagex + (document.documentElement.scrollLeft + document.body.scrollLeft);
	var yellowx=$("#goods_photo").offset().left;
	var purplex=$("#shard").outerWidth()/2;
	var bluex=redx-yellowx-purplex;
	var redy = $pagey + (document.documentElement.scrollTop + document.body.scrollTop);
	var yellowy=$("#goods_photo").offset().top;
	var purpley=$("#shard").outerHeight()/2;
	var bluey=redy-yellowy-purpley;
	var maxwidth=$("#goods_photo").outerWidth()-$("#shard").outerWidth();
	var maxheight=$("#goods_photo").outerHeight()-$("#shard").outerHeight();
	if (bluex<=0)
	{
		bluex=0;
	} 
	if(bluex>=maxwidth)
	{
		bluex=maxwidth;
	}
	if (bluey<=0)
	{
		bluey=0;
	}
	if (bluey>=maxheight)
	{
		bluey=maxheight;
	}
	var offsetx=-(bluex*bigimg.offsetWidth/parseFloat(getStyleAttrar(goods_photo,"width")))+"px";
	var offsety=-(bluey*bigimg.offsetHeight/parseFloat(getStyleAttrar(goods_photo,"height")))+"px";
	$("#shard").css({'top':bluey,'left':bluex});
	$("#reading_glass img").css({'top':offsety,'left':offsetx});
	
	function getStyleAttrar(obj,attr)
	{
		if (obj.currentStyle)
		{
			return obj.currentStyle[attr];
		}
		else
		{
			return window.getComputedStyle(obj)[attr];
		}
	}
	
})
var gds_size=null;
$(".goods_size li").click(function()//选中更换尺码背景
{
	var index=$(this).index();
	$(".goods_size li").eq(index).css({"background-position": "-2px -37px"}).siblings().css({"background-position": "0px 0px"});
	gds_size=$(".goods_size li").eq(index).html();
})
$(".raduce").click(function()//减少商品件数
{
	if ($("#nums").val()<=1) {
		$("#nums").val("1");
	} else{
		$("#nums").val($("#nums").val()-1);
	}
})
$(".add").click(function()//增加商品件数
{
	$("#nums").val(($("#nums").val()*1)+1);
})
$("#add_buy").click(function()//立即购买
{
	var gds_photo=$("#goods_photo img").attr("src");
	var gds_name=$("h2").html();
	var gds_price=$(".discount").html();
	var gds_nums=$("#nums").val();
	var gdid=getCookie("goodsid_"+id);

	if (gdid)
	{
		var num=getCookie("goodsnum_"+id)*1;
		gds_nums=gds_nums*1+num*1;
		setCookie("goodsnum_"+id,gds_nums,7);
	}else
	{
		if(gds_size==null)
		{
			alert("请选择商品尺寸！");
		}
		else
		{
			setCookie("goodssize_"+id,gds_size,7);
		}
		setCookie("goodsid_"+id,id,7);
		setCookie("goodsname_"+id,encodeURIComponent(gds_name),7);
		setCookie("goodsprice_"+id,encodeURIComponent(gds_price),7);
		setCookie("goodsphoto_"+id,encodeURIComponent(gds_photo),7);
		setCookie("goodsnum_"+id,gds_nums,7);
	}
	
})