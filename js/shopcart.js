var str = document.cookie;
var list = str.split(";");
var idlist = [];
for(var i = 0; i < list.length; i++) {
	var temp = list[i];
	if(temp.indexOf("goodsid_") != -1) {
		idlist.push(temp.split("=")[1]);
	}
}
var flagcount = 0;
for(var i = 0; i < idlist.length; i++) {
	flagcount++;
	var spid = idlist[i];
	var spname = decodeURIComponent(getCookie("goodsname_" + spid));
	var spprice = decodeURIComponent(getCookie("goodsprice_" + spid));
	var spnum = getCookie("goodsnum_" + spid);
	var spsize = getCookie("goodssize_" + spid);
	var spphoto = decodeURIComponent(getCookie("goodsphoto_" + spid));
	var spinfor = $("<ul class='cart_title1' goodsid='" + spid + "'><li class='goods_infor title_width2_1 cart_pho'><img src='" + spphoto + "'/></li><li class='goods_infor title_width2_4 cart_name'><a class='cart_btn' href=''>" + spname +
		"</a></li><li class='goods_infor title_width2_1 cart_state'>现货</li><li class='goods_infor title_width2_1 cart_size'>" + spsize + "</li><li class='goods_infor title_width2_2 cart_oneprice'>" + spprice +
		"</li><li class='goods_infor title_width2_2 cart_num'><span class='raduce'> -</span><input type='text' id='nums' value='" + spnum + "'/><span class='add'>+</span><sapn class='black'>件 </sapn></li><li class='goods_infor title_width2_2 cart_total'>" + spnum * (spprice.split("￥")[1]) +
		"</li><li class='goods_infor title_width2_3 cart_operate'><a class='cart_btn' onclick=''>收藏</a> | <a class='cart_del'>删除</a></li></ul>");
	$("#cart_cont").append(spinfor);
}
$(".raduce").click(function() {
	var num = $(this).parent().parent().children().eq(5).children().eq(1);
	var price = $(this).parent().parent().children().eq(4).html();
	var totle = $(this).parent().parent().children().eq(6);
	var id = $(this).parent().parent().attr("goodsid");
	if(num.val() <= 1) //当数量小于1时，是否删除商品
	{

		if(confirm("是否删除该商品？")) {
			$(this).parent().parent().remove();
			setCookie("goodsid_" + id, id, -7);
			setCookie("goodsname_" + id, '', -7);
			setCookie("goodsprice_" + id, '', -7);
			setCookie("goodsphoto_" + id, '', -7);
			setCookie("goodsnum_" + id, '', -7);
			setCookie("goodssize_" + id, '', -7);
		}
		reckon();
		transform();
	} else {
		num.val(num.val() - 1);
	}
	setCookie("goodsnum_" + id, num.val(), 7);
	totle.html(num.val() * parseFloat(price.split("￥")[1])); //小计
	reckon();
})
$(".add").click(function() {
	var id = $(this).parent().parent().attr("goodsid");
	var num = $(this).parent().parent().children().eq(5).children().eq(1);
	var price = $(this).parent().parent().children().eq(4).html();
	var totle = $(this).parent().parent().children().eq(6);
	num.val((num.val() * 1) + 1);
	totle.html(num.val() * parseFloat(price.split("￥")[1])); //小计
	setCookie("goodsnum_" + id, num.val(), 7);
	reckon();
})
reckon();

function reckon() //结算处
{
	var ullength = $(".cart_title1");
	var sun_num = 0;
	var sun_money = 0;
	for(var i = 0; i < ullength.length; i++) {
		sun_num += ullength.eq(i).children().eq(5).children().eq(1).val() * 1;
		sun_money += ullength.eq(i).children().eq(6).html() * 1;
	}
	$(".goods_num").html(sun_num); //商品件数总计
	$(".goods_sun_price").html(sun_money + "元"); //金额总计
	$(".should_pay_money").html(sun_money + "元"); //应付金额
}
$(".cart_del").click(function() //删除商品
	{
		var id = $(this).parent().parent().attr("goodsid");
		if(confirm("是否删除该商品？")) {
			$(this).parent().parent().remove();
			setCookie("goodsid_" + id, id, -7);
			setCookie("goodsname_" + id, '', -7);
			setCookie("goodsprice_" + id, '', -7);
			setCookie("goodsphoto_" + id, '', -7);
			setCookie("goodsnum_" + id, '', -7);
			setCookie("goodssize_" + id, '', -7);
		}
		reckon();
		transform();
	})

function transform() {
	var ulsize = $(".cart_title1").length;
	if(ulsize == 0) {
		$("#center").show();
		$("#cart_box").hide();
	} else {
		$("#center").hide();
		$("#cart_box").show();
	}
}
transform();
$(".empty_cart").click(function() //清空购物车
{
	var long = $(".cart_title1");
	if(confirm("您确定清空购物车？？"))
	{
		for(var i = 0; i < long.length; i++)
		{
			long.eq(i).remove();
			var id = long.eq(i).attr('goodsid');
			setCookie("goodsid_" + id, id, -7);
			setCookie("goodsname_" + id, '', -7);
			setCookie("goodsprice_" + id, '', -7);
			setCookie("goodsphoto_" + id, '', -7);
			setCookie("goodsnum_" + id, '', -7);
			setCookie("goodssize_" + id, '', -7);
		}
	}
		transform();
})