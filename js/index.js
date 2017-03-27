//轮播图
var index=0;
var timer=null;
var length=$(".rollnumbox .rollnumber").length;
start();
function start()
{
	clearInterval(timer);
	timer=setInterval(function()
	{
		index++;
		if (index==length) {
			index=0;
		}
		show();
	},3000)
}
$(".rollnumbox .rollnumber").mouseover(function()
{
	index=$(this).index();
	show();
	clearInterval(timer);
}).mouseout(function()
{
	start();
});
function show()
{
	$(".rollnumbox .rollnumber").eq(index).addClass("numselect").siblings().removeClass("numselect");
	$(".rollphoto .roll1:eq("+index+")").addClass("roll_select").siblings().removeClass("roll_select");
}
$("#oneFloor .oFtitle").mouseover(function()
{
	var index=$(this).index();
	$(this).addClass("ofselect").siblings().removeClass("ofselect");
	$("#oneFloor_cont .onef_c1:eq("+index+")").addClass("c1_select").siblings().removeClass("c1_select");
})
//选项卡
$("#twoF_right .tFtitle").mouseover(function()
{
	var index=$(this).index();
	$(this).addClass("tfselect").siblings().removeClass("tfselect");
	$(".three_shose .three_width:eq("+index+")").addClass("tfcselect").siblings().removeClass("tfcselect");
})
