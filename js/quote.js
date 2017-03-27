$("#head_warp").load("layout/head.html", function()
{
	$("#province ul li").click(function() {
		$(".address").html($(this).html()+"▼");
		
	})
});
$("#right_warp").load("layout/right.html");
$("#foot_warp").load("layout/foot.html",function()
{
	$(window).scroll(function()
	{
		var $hidTop=$(this).scrollTop();
		var $H=$("#head_warp").height();
		if ($hidTop>$H*4)
		{
			$(".MyLT6").show();
		}
		else
		{
			$(".MyLT6").hide();
		}
		$(".MyLT6").click(function()
		{
			$("html,body").stop().animate({"scrollTop":0});
		});
	})
});